"use client";
import { useRef, useEffect, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, Star } from "lucide-react";

// Keep a reference to the currently playing instance
let currentPlaying: any = null;

function TestimonialCard({ testimonial }) {
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const wavesurfer = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (waveformRef.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#cbd5e1",        // muted gray
        progressColor: "#0ea5e9",    // primary color
        cursorColor: "#0ea5e9",
        height: 60,
        barWidth: 3,
        responsive: true,
      });

      // load audio file (must be in /public/audio)
      wavesurfer.current.load(testimonial.audio);

      // Reset on finish
      wavesurfer.current.on("finish", () => setIsPlaying(false));
    }

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, [testimonial.audio]);

  const togglePlay = () => {
    if (!wavesurfer.current) return;

    // Stop other audios
    if (currentPlaying && currentPlaying !== wavesurfer.current) {
      currentPlaying.pause();
      currentPlaying.setTime(0); // reset others
    }

    // Play/Pause this one
    wavesurfer.current.playPause();
    setIsPlaying(!isPlaying);

    // Track this as current
    currentPlaying = wavesurfer.current;
  };

  return (
    <Card className="card-luxury">
      <div className="p-6 space-y-4">
        {/* Rating */}
        <div className="flex items-center space-x-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
          ))}
        </div>

        {/* Audio Player */}
        <div className="flex items-center space-x-3">
          <Button size="icon" variant="outline" onClick={togglePlay}>
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5 text-black" />
            )}
          </Button>
          <div
            ref={waveformRef}
            className="flex-1 min-w-[150px] h-[60px]"
          />
        </div>

        {/* Client Info */}
        <div className="border-t border-border/50 pt-4">
          <div className="font-semibold text-foreground">{testimonial.name}</div>
          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
        </div>
      </div>
    </Card>
  );
}

export default TestimonialCard;
