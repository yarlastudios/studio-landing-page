"use client";

class SoundSystem {
  private ctx: AudioContext | null = null;
  private unlocked = false;

  /** Called once on first user gesture to create & unlock the AudioContext */
  public unlock() {
    if (this.unlocked || typeof window === "undefined") return;

    const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return;

    this.ctx = new Ctor();
    this.unlocked = true;

    // Some browsers start in "suspended" — resume immediately inside the gesture
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  private get ready(): boolean {
    return !!this.ctx && this.ctx.state === "running";
  }

  public playClick() {
    if (!this.ready) return;
    const ctx = this.ctx!;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(1400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(480, ctx.currentTime + 0.055);

    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.055);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.055);
  }

  public playWhoosh() {
    if (!this.ready) return;
    const ctx = this.ctx!;

    const duration = 0.5;
    const bufferSize = Math.ceil(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(200, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.25);
    filter.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + duration);
    filter.Q.value = 0.8;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noise.start();
    noise.stop(ctx.currentTime + duration);
  }

  public playKeypress() {
    if (!this.ready) return;
    const ctx = this.ctx!;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(380 + Math.random() * 80, ctx.currentTime);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.04);
  }
}

export const soundSystem = new SoundSystem();
