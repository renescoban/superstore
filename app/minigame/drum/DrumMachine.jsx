"use client"
import React, { useState, useEffect, useRef } from 'react';

const drumSounds = ['hihat', 'snare', 'kick'];

const patterns = {
  basic: [
    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], // Hi-Hat
    [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0], // Snare
    [1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1]  // Kick
  ],
  funky: [
    [1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1], // Hi-Hat
    [0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0], // Snare
    [1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0]  // Kick
  ],
  rock: [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], // Hi-Hat
    [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0], // Snare
    [1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0]  // Kick
  ],
  hiphop: [
    [1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1], // Hi-Hat
    [0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0], // Snare
    [1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0]  // Kick
  ]
};

function DrumMachine() {
  const [pattern, setPattern] = useState(patterns.basic);
  const [selectedPattern, setSelectedPattern] = useState('basic');
  const [isPlaying, setIsPlaying] = useState(false);
  const [tempo, setTempo] = useState(140);
  const [currentBeat, setCurrentBeat] = useState(0);

  const audioContextRef = useRef(null);
  const noiseBufferRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    createNoiseBuffer();
  }, []);

  useEffect(() => {
    if (isPlaying) {
      playBeat();
    } else {
      clearTimeout(timerRef.current);
    }
  }, [isPlaying, currentBeat, tempo]);

  function createNoiseBuffer() {
    const bufferSize = audioContextRef.current.sampleRate * 2;
    const buffer = audioContextRef.current.createBuffer(1, bufferSize, audioContextRef.current.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    noiseBufferRef.current = buffer;
  }

  function createDrumSound(type) {
    const audioContext = audioContextRef.current;
    const gainNode = audioContext.createGain();
    gainNode.connect(audioContext.destination);

    switch (type) {
      case 'hihat':
        const hihatSource = audioContext.createBufferSource();
        hihatSource.buffer = noiseBufferRef.current;

        const hihatFilter = audioContext.createBiquadFilter();
        hihatFilter.type = 'highpass';
        hihatFilter.frequency.value = 7000;

        hihatSource.connect(hihatFilter);
        hihatFilter.connect(gainNode);

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

        hihatSource.start();
        hihatSource.stop(audioContext.currentTime + 0.1);
        break;

      case 'snare':
        const snareNoise = audioContext.createBufferSource();
        snareNoise.buffer = noiseBufferRef.current;

        const snareFilter = audioContext.createBiquadFilter();
        snareFilter.type = 'highpass';
        snareFilter.frequency.value = 1000;

        const snareEnvelope = audioContext.createGain();
        snareEnvelope.gain.setValueAtTime(1, audioContext.currentTime);
        snareEnvelope.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

        const snareOscillator = audioContext.createOscillator();
        snareOscillator.type = 'triangle';
        snareOscillator.frequency.value = 100;

        snareNoise.connect(snareFilter);
        snareFilter.connect(snareEnvelope);
        snareOscillator.connect(snareEnvelope);
        snareEnvelope.connect(gainNode);

        gainNode.gain.setValueAtTime(0.7, audioContext.currentTime);

        snareNoise.start();
        snareOscillator.start();
        snareNoise.stop(audioContext.currentTime + 0.2);
        snareOscillator.stop(audioContext.currentTime + 0.2);
        break;

      case 'kick':
        const kickOscillator = audioContext.createOscillator();
        kickOscillator.type = 'sine';

        const kickEnvelope = audioContext.createGain();
        kickEnvelope.gain.setValueAtTime(1, audioContext.currentTime);
        kickEnvelope.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);

        kickOscillator.frequency.setValueAtTime(150, audioContext.currentTime);
        kickOscillator.frequency.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);

        kickOscillator.connect(kickEnvelope);
        kickEnvelope.connect(gainNode);

        gainNode.gain.setValueAtTime(1, audioContext.currentTime);

        kickOscillator.start();
        kickOscillator.stop(audioContext.currentTime + 0.5);
        break;

      default:
        break;
    }
  }

  function toggleCell(row, col) {
    const newPattern = [...pattern];
    newPattern[row][col] = 1 - newPattern[row][col];
    setPattern(newPattern);
  }

  function playBeat() {
    drumSounds.forEach((sound, row) => {
      if (pattern[row][currentBeat]) {
        createDrumSound(sound);
      }
    });

    timerRef.current = setTimeout(() => {
      setCurrentBeat((currentBeat + 1) % 16);
    }, (30 / tempo) * 1000);
  }

  function handlePlayStop() {
    if (isPlaying) {
      setIsPlaying(false);
      setCurrentBeat(0);
    } else {
      setIsPlaying(true);
    }
  }

  function handleTempoChange(e) {
    setTempo(Number(e.target.value));
  }

  function handlePatternChange(e) {
    const newPatternName = e.target.value;
    setSelectedPattern(newPatternName);
    setPattern(patterns[newPatternName]);
    setCurrentBeat(0);
  }

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center">
      <div className="bg-neutral-800 rounded-lg p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center text-red-500 mb-6">16-Step Drum Machine</h1>
        <div className="flex">
          <div className="flex flex-col justify-around mr-4 font-bold text-red-300">
            <div>Hi-Hat</div>
            <div>Snare</div>
            <div>Kick</div>
          </div>
          <div>
            <div className="grid grid-cols-16 gap-1 mb-1">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="text-center text-xs text-red-300 w-8">{i + 1}</div>
              ))}
            </div>
            <div className="grid grid-cols-16 gap-1">
              {pattern.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`w-8 h-8 rounded cursor-pointer ${
                      cell ? 'bg-red-500' : 'bg-red-900'
                    } ${isPlaying && colIndex === currentBeat ? 'ring-2 ring-red-300' : ''}`}
                    onClick={() => toggleCell(rowIndex, colIndex)}
                  />
                ))
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <button
            className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={handlePlayStop}
          >
            {isPlaying ? 'Stop' : 'Play'}
          </button>
          <input
            type="range"
            min="60"
            max="180"
            value={tempo}
            onChange={handleTempoChange}
            className="w-48"
          />
          <span>{tempo} BPM</span>
        </div>
        <div className="mt-4">
          <label htmlFor="pattern-select" className="block mb-2">Choose a pattern:</label>
          <select
            id="pattern-select"
            value={selectedPattern}
            onChange={handlePatternChange}
            className="bg-gray-700 text-white rounded px-2 py-1"
          >
            <option value="basic">Basic</option>
            <option value="funky">Funky</option>
            <option value="rock">Rock</option>
            <option value="hiphop">Hip Hop</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default DrumMachine;