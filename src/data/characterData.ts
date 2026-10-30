import { CharacterSheet, CircuitPart } from '../types';

export const circuitKidCharacter: CharacterSheet = {
  name: "Prajwal",
  codename: "The Circuit Kid (with Spark-E)",
  age: 8,
  species: "Human Inventor Boy & Living Silicon Familiar",
  appearance: {
    hair: "Wild spiky black marker strokes with two stubborn antenna cowlicks that twitch when curious.",
    clothing: "Oversized sun-yellow hoodie with blue crayon smudges, torn knee jeans, mismatched rocket socks.",
    eyes: "Glowing green LED pupils drawn in bright highlighter marker that twinkle when seeing circuits.",
    gear: [
      "Broken RC Car Antenna taped to his headband",
      "Pocket full of loose 10k resistors and shiny washers",
      "Chubby green wax crayon for sketching circuit diagrams",
      "Magnifying glass wrapped in glitter duct-tape"
    ],
    crayonColors: ["#facc15", "#ef4444", "#3b82f6", "#22c55e", "#a855f7"]
  },
  personality: {
    traits: [
      "Incurably curious about how everything works inside",
      "Fearless disassembler (never cries over broken toys, only investigates)",
      "Deeply empathetic — believes broken toys just want to be understood",
      "Hyper-focused when staring at circuit boards"
    ],
    catchphrase: "Wait, Dad! Don't throw it out... Look at what's living inside!",
    fears: ["Flat batteries", "Missing the tiny Phillips-head screw in the carpet"],
    loves: ["Smell of fresh circuit boards", "Dad's high-lift hugs", "Spinning motors"]
  },
  professionAndQuirks: {
    primaryRole: "Master Toy Reverse-Engineer & Junior Silicon Wizard",
    superpower: "X-Ray Crayon Sight: Can see invisible electric pulses galloping through copper traces.",
    quirks: [
      "Makes mouth-motor noises ('Vrrroooom-chzzzt!') when concentrating",
      "Labels his school notebooks with schematic symbols instead of numbers",
      "Collects fallen electronic scraps like treasure gems"
    ],
    specialMoves: [
      "Copper Trace Tracer (draws connections in 0.2s)",
      "Antenna Signal Reach (hears radio waves in his imagination)",
      "High-Volt Hug (restores 100% morale immediately)"
    ]
  },
  stats: {
    curiosity: 100,
    toolBreakerSkill: 96,
    tinkeringSpeed: 89,
    hugEnergy: 100,
    snackLevel: 94
  }
};

export const circuitParts: CircuitPart[] = [
  {
    id: "motherboard",
    name: "Printed Circuit Board (PCB)",
    kidName: "The Green Silicon Island",
    role: "The Toy's Brain & City Streets",
    explanation: "A sturdy emerald plate made of fiberglass. It holds every single electrical house, shop, and traveler so nothing gets lost in the plastic case!",
    icon: "Cpu",
    color: "#22c55e",
    glowColor: "rgba(34, 197, 94, 0.4)",
    funFact: "The green color comes from a special solder mask that protects delicate copper from dust and water splashes."
  },
  {
    id: "copper-traces",
    name: "Copper Trace Pathways",
    kidName: "Golden Lightning Roads",
    role: "The Superhighways for Electrons",
    explanation: "Tiny shiny winding copper tracks pressed into the board. Billions of tiny electric messengers zip across them at near light-speed to carry steering commands!",
    icon: "GitBranch",
    color: "#f59e0b",
    glowColor: "rgba(245, 158, 11, 0.4)",
    funFact: "Copper is one of the best conductors on Earth—electrons slide through it like a greased water slide."
  },
  {
    id: "antenna",
    name: "Radio Frequency Receiver Antenna",
    kidName: "The Silver Sky Whisperer",
    role: "Invisible Signal Catcher",
    explanation: "A gleaming silver coil that catches invisible radio waves dancing through the living room air, sent by the handheld remote control trigger.",
    icon: "Radio",
    color: "#38bdf8",
    glowColor: "rgba(56, 189, 248, 0.4)",
    funFact: "Radio waves can pass straight through walls, tables, and even socks!"
  },
  {
    id: "motor-driver",
    name: "H-Bridge Motor Controller",
    kidName: "The Wheel Commander",
    role: "Muscle & Speed Boss",
    explanation: "Tells the wheels whether to spin forward, slam in reverse, or drift around the living room couch with full battery torque.",
    icon: "RotateCw",
    color: "#ec4899",
    glowColor: "rgba(236, 72, 153, 0.4)",
    funFact: "An H-bridge uses 4 tiny electronic switches to reverse electrical flow instantly!"
  },
  {
    id: "leds",
    name: "Status Indicator LEDs",
    kidName: "The Blinking Heartbeat",
    role: "Visual Communication",
    explanation: "Glows bright ruby red and electric blue to tell Prajwal whether the car is listening, charging, or ready to race.",
    icon: "Sparkles",
    color: "#ef4444",
    glowColor: "rgba(239, 68, 68, 0.4)",
    funFact: "LED stands for Light Emitting Diode, and they stay cool to the touch even after hours of glowing."
  }
];
