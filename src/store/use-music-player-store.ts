import { create } from "zustand";

interface Lyric {
  time: number;
  text: string;
}

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  cover: string;
  audio: string;
  lyrics: Lyric[];
}

interface MusicPlayerStore {
  currentTrack: Track | null;
  isPlaying: boolean;
  volume: number;
  shuffle: boolean;
  repeat: boolean;
  playlist: Track[];
  setTrack: (track: Track) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setVolume: (volume: number) => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
}

export const useMusicPlayerStore = create<MusicPlayerStore>((set, get) => ({
  currentTrack: null,
  isPlaying: false,
  volume: 0.5,
  shuffle: false,
  repeat: false,
  playlist: [
    {
      id: "track-1",
      title: "Shape Of You",
      artist: "Ed Sheeran",
      album: "÷ (Divide)",
      cover: "/img/Shape_Of_You_(Official_Single_Cover)_by_Ed_Sheeran.png",
      audio:
        "/sounds/Ed_Sheeran_Shape_Of_You_Official_Lyric_Video_128_kbps.mp3",
      lyrics: [
        { time: 0, text: "The club isn't the best place to find a lover" },
        { time: 4, text: "So the bar is where I go" },
        { time: 8, text: "Me and my friends at the table doing shots" },
        { time: 12, text: "Drinking fast and then we talk slow" },
        {
          time: 16,
          text: "You come over and start up a conversation with just me",
        },
        { time: 20, text: "And trust me, I'll give it a chance now" },
        {
          time: 24,
          text: "Take my hand, stop, put Van the Man on the jukebox",
        },
        { time: 28, text: "And then we start to dance" },
        { time: 32, text: "And now I'm singing like" },
        { time: 36, text: "Girl, you know I want your love" },
        { time: 40, text: "Your love was handmade for somebody like me" },
        { time: 44, text: "Come on now, follow my lead" },
        { time: 48, text: "I may be crazy, don't mind me" },
        { time: 52, text: "Say, boy, let's not talk too much" },
        { time: 56, text: "Grab on my waist and put that body on me" },
        { time: 60, text: "Come on now, follow my lead" },
        { time: 64, text: "Come, come on now, follow my lead, mmm-mmm" },
        { time: 68, text: "I'm in love with the shape of you" },
        { time: 72, text: "We push and pull like a magnet do" },
        { time: 76, text: "Although my heart is falling too" },
        { time: 80, text: "I'm in love with your body" },
        { time: 84, text: "And last night you were in my room" },
        { time: 88, text: "And now my bedsheets smell like you" },
        { time: 92, text: "Every day discovering something brand new" },
        { time: 96, text: "I'm in love with your body" },
        { time: 100, text: "Oh—I—oh—I—oh—I—oh—I" },
        { time: 104, text: "I'm in love with your body" },
        { time: 108, text: "Oh—I—oh—I—oh—I—oh—I" },
        { time: 112, text: "I'm in love with your body" },
        { time: 116, text: "Oh—I—oh—I—oh—I—oh—I" },
        { time: 120, text: "I'm in love with your body" },
        { time: 124, text: "Every day discovering something brand new" },
        { time: 128, text: "I'm in love with the shape of you" },
      ],
    },
    {
      id: "track-2",
      title: "Ghost",
      artist: "Justin Bieber",
      album: " Justice (Complete Edition)",
      cover: "/img/jb_ghost_img.jpg",
      audio: "/sounds/Justin_Bieber_-_Ghost_(Lyrics)(256k).mp3",
      lyrics: [
        { time: 0, text: "The club isn't the best place to find a lover" },
        { time: 4, text: "So the bar is where I go" },
        { time: 8, text: "Me and my friends at the table doing shots" },
        { time: 12, text: "Drinking fast and then we talk slow" },
        { time: 15, text: "The club isn't the best place to find a lover" },
        { time: 20, text: "So the bar is where I go" },
        { time: 22, text: "Me and my friends at the table doing shots" },
        { time: 23, text: "Drinking fast and then we talk slow" },
        { time: 27, text: "So the bar is where I go" },
        { time: 30, text: "Me and my friends at the table doing shots" },
        { time: 40, text: "Drinking fast and then we talk slow" },
      ],
    },
    {
      id: "track-3",
      title: "Let Her Go",
      artist: "Passenger",
      album: "All the Little Lights",
      cover: "/img/Let-her-go-by-passenger.jpg",
      audio: "/sounds/Passenger_Let_Her_Go_Official_Video_128_kbps.mp3",
      lyrics: [
        { time: 0, text: "The club isn't the best place to find a lover" },
        { time: 4, text: "So the bar is where I go" },
        { time: 8, text: "Me and my friends at the table doing shots" },
        { time: 12, text: "Drinking fast and then we talk slow" },
        { time: 15, text: "The club isn't the best place to find a lover" },
        { time: 20, text: "So the bar is where I go" },
        { time: 22, text: "Me and my friends at the table doing shots" },
        { time: 23, text: "Drinking fast and then we talk slow" },
        { time: 27, text: "So the bar is where I go" },
        { time: 30, text: "Me and my friends at the table doing shots" },
        { time: 40, text: "Drinking fast and then we talk slow" },
      ],
    },
    {
      id: "track-4",
      title: "Sparkle",
      artist: "Radwhimps",
      album: "Your Name",
      cover: "/img/sparkle_img.jpg",
      audio: "/sounds/Sparkle _ Your Name AMV (128 kbps).mp3",
      lyrics: [
        { time: 0, text: "The club isn't the best place to find a lover" },
        { time: 4, text: "So the bar is where I go" },
        { time: 8, text: "Me and my friends at the table doing shots" },
        { time: 12, text: "Drinking fast and then we talk slow" },
        { time: 15, text: "The club isn't the best place to find a lover" },
        { time: 20, text: "So the bar is where I go" },
        { time: 22, text: "Me and my friends at the table doing shots" },
        { time: 23, text: "Drinking fast and then we talk slow" },
        { time: 27, text: "So the bar is where I go" },
        { time: 30, text: "Me and my friends at the table doing shots" },
        { time: 40, text: "Drinking fast and then we talk slow" },
      ],
    },
    {
      id: "track-5",
      title: "Nandemonaiya",
      artist: "Radwhimps",
      album: "Your Name",
      cover: "/img/nandemonaiya_img.jpg",
      audio:
        "/sounds/NandemonaiyaRadwhimps_from_Your_name_君の名はJpn_Rom_Myan.mp3",
      lyrics: [
        { time: 0, text: "The club isn't the best place to find a lover" },
        { time: 4, text: "So the bar is where I go" },
        { time: 8, text: "Me and my friends at the table doing shots" },
        { time: 12, text: "Drinking fast and then we talk slow" },
        { time: 15, text: "The club isn't the best place to find a lover" },
        { time: 20, text: "So the bar is where I go" },
        { time: 22, text: "Me and my friends at the table doing shots" },
        { time: 23, text: "Drinking fast and then we talk slow" },
        { time: 27, text: "So the bar is where I go" },
        { time: 30, text: "Me and my friends at the table doing shots" },
        { time: 40, text: "Drinking fast and then we talk slow" },
      ],
    },
  ],
  setTrack: (track) => set({ currentTrack: track }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setVolume: (volume) => set({ volume }),
  toggleRepeat: () => set((state) => ({ repeat: !state.repeat })),
  toggleShuffle: () => set((state) => ({ shuffle: !state.shuffle })),
  nextTrack: () => {
    const { currentTrack, playlist, shuffle, repeat } = get();
    if (!currentTrack) return;

    const currentIndex = playlist.findIndex((p) => p.id === currentTrack.id);
    let nextIndex;
    if (shuffle) {
      nextIndex = Math.floor(Math.random() * playlist.length);
    } else {
      nextIndex = (currentIndex + 1) % playlist.length;
    }

    if (nextIndex === 0 && !repeat) {
      set({ currentTrack: playlist[0], isPlaying: false });
    } else {
      set({ currentTrack: playlist[nextIndex] });
    }
  },
  prevTrack: () => {
    const { currentTrack, playlist } = get();
    if (!currentTrack) return;

    const currentIndex = playlist.findIndex((p) => p.id === currentTrack.id);

    const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;

    set({ currentTrack: playlist[prevIndex] });
  },
}));
