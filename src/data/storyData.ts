export interface StorySceneData {
  id: number;
  chapterNumber: string;
  title: string;
  kidDoodleTag: string;
  storyText: string;
  kidVoiceNote: string;
  audioPrompt: string;
  actionButtonLabel: string;
  drawingMood: 'table' | 'launch' | 'flight' | 'impact' | 'frozen' | 'shell-split' | 'pcb-reveal' | 'copper-paths' | 'antenna' | 'footsteps' | 'dad-hug' | 'carpet-talk' | 'led-eyes' | 'monitor-desk' | 'future-invention';
}

export const storyScenes: StorySceneData[] = [
  {
    id: 1,
    chapterNumber: "SCENE 01",
    title: "The Living Room Speedway",
    kidDoodleTag: "🏎️ REV THE ENGINE!",
    storyText: "It began on an ordinary afternoon in the living room. 8-year-old Prajwal placed his prized red remote-control buggy at the far end of the polished wooden dining table. He turned on the switch, gripped the transmitter, and grinned.",
    kidVoiceNote: "I cleared away the salt shaker and napkins to make a straight 6-foot runway. The rubber tires had maximum grip!",
    audioPrompt: "It began on an ordinary afternoon in the living room. Eight-year-old Prajwal placed his prized red remote-control buggy at the far end of the polished wooden dining table.",
    actionButtonLabel: "🕹️ Grip the Remote Controller",
    drawingMood: 'table'
  },
  {
    id: 2,
    chapterNumber: "SCENE 02",
    title: "Full Throttle to the Edge",
    kidDoodleTag: "⚡ MAXIMUM SPEED!",
    storyText: "Prajwal jammed the plastic joystick all the way up! The tiny DC motor whined with high-pitched electric power. The car shot forward like a scarlet rocket, hurtling straight toward the edge of the table.",
    kidVoiceNote: "I wanted to see if it could brake in time before the drop. Spoiler alert: It definitely could not brake in time!",
    audioPrompt: "Prajwal jammed the plastic joystick all the way up! The tiny motor whined with high-pitched electric power. The car shot forward like a scarlet rocket.",
    actionButtonLabel: "💨 Push Joystick All the Way Up!",
    drawingMood: 'launch'
  },
  {
    id: 3,
    chapterNumber: "SCENE 03",
    title: "The Mid-Air Leap",
    kidDoodleTag: "✈️ LOOK, IT'S FLYING!",
    storyText: "With zero table left underneath its wheels, the buggy launched into the empty air! For one magical split second, the car floated in a perfect graceful parabola right above the coffee table, tires still spinning furiously.",
    kidVoiceNote: "For half a second, I really believed I had invented a flying car. Gravity had other plans though!",
    audioPrompt: "With zero table left underneath its wheels, the buggy launched into the empty air! For one magical split second, the car floated in a perfect graceful parabola.",
    actionButtonLabel: "🚀 Watch the Car Fly Through the Air",
    drawingMood: 'flight'
  },
  {
    id: 4,
    chapterNumber: "SCENE 04",
    title: "The Loud Crash!",
    kidDoodleTag: "💥 KABOOM! CRACK! WHAM!",
    storyText: "CRASH! The car slammed nose-first onto the living room rug with a violent plastic clatter. Screws bounced across the floorboards, one rear wheel rolled under the armchair, and a loud crack echoed through the house.",
    kidVoiceNote: "The sound was so loud it sounded like a firecracker went off in the living room! My heart skipped two beats.",
    audioPrompt: "Crash! The car slammed nose-first onto the living room rug with a violent plastic clatter. Screws bounced across the floorboards, and a loud crack echoed through the house.",
    actionButtonLabel: "💥 Trigger Comic Impact Crash",
    drawingMood: 'impact'
  },
  {
    id: 5,
    chapterNumber: "SCENE 05",
    title: "Frozen in Pure Awe",
    kidDoodleTag: "😲 NO TEARS, JUST WONDER",
    storyText: "Most eight-year-olds would have burst into tears seeing their favorite toy smashed to bits. But Prajwal stood completely, utterly frozen in awe. His eyes went wide as saucers, staring down at the scattered fragments.",
    kidVoiceNote: "I didn't feel sad at all. My brain just went completely silent, because something incredible was peeking out from the cracks.",
    audioPrompt: "Most eight-year-olds would have burst into tears seeing their favorite toy smashed to bits. But Prajwal stood completely, utterly frozen in awe.",
    actionButtonLabel: "👀 Lean In Closer to the Carpet",
    drawingMood: 'frozen'
  },
  {
    id: 6,
    chapterNumber: "SCENE 06",
    title: "The Plastic Shell Splits Open",
    kidDoodleTag: "🎁 THE SECRET UNBOXING",
    storyText: "The impact had popped the red plastic chassis clean in half like a walnut shell. Resting right in the center of the broken shell was an intricate, miniature world Prajwal had never known existed inside his toy.",
    kidVoiceNote: "The plastic was just a jacket! The real creature living inside was this magical little plate of tech treasure.",
    audioPrompt: "The impact had popped the red plastic chassis clean in half like a walnut shell. Resting right in the center was an intricate, miniature world.",
    actionButtonLabel: "🔓 Pop Open the Plastic Shell",
    drawingMood: 'shell-split'
  },
  {
    id: 7,
    chapterNumber: "SCENE 07",
    title: "The Green Motherboard Island",
    kidDoodleTag: "🏝️ EMERALD SILICON CITY",
    storyText: "Spilling out was a bright, shimmering green motherboard. To Prajwal's imagination, it looked like an emerald city seen from an airplane, packed with tiny black skyscraper chips and silver towers.",
    kidVoiceNote: "I had no idea toys had cities inside them! The green board felt cool and smooth against my fingertips.",
    audioPrompt: "Spilling out was a bright, shimmering green motherboard. To Prajwal's imagination, it looked like an emerald city packed with tiny black skyscraper chips.",
    actionButtonLabel: "🔬 Inspect the Green Motherboard",
    drawingMood: 'pcb-reveal'
  },
  {
    id: 8,
    chapterNumber: "SCENE 08",
    title: "Golden Copper Trace Roads",
    kidDoodleTag: "🛣️ LIGHTNING HIGHWAYS",
    storyText: "Connecting every single part were tiny, winding, gleaming copper paths etched into the board. They curled like golden rivers, carrying invisible messengers back and forth at the speed of light.",
    kidVoiceNote: "I traced one golden line with my fingernail from the battery solder dot all the way to the tiny brain chip!",
    audioPrompt: "Connecting every single part were tiny, winding, gleaming copper paths etched into the board. They curled like golden rivers carrying invisible messengers.",
    actionButtonLabel: "⚡ Trace Golden Copper Lines",
    drawingMood: 'copper-paths'
  },
  {
    id: 9,
    chapterNumber: "SCENE 09",
    title: "The Silver Sky Whisperer",
    kidDoodleTag: "📡 SECRET RADIO ANTENNA",
    storyText: "Springing up from the corner was a gleaming silver antenna coil. Prajwal gently tapped it, watching it bounce like a tiny silver spring that could catch invisible waves traveling through the air.",
    kidVoiceNote: "This was the magic wire! When I squeezed the trigger on the table, invisible whispers flew across the room straight into this coil.",
    audioPrompt: "Springing up from the corner was a gleaming silver antenna coil. Prajwal gently tapped it, watching it bounce like a tiny silver spring catching invisible waves.",
    actionButtonLabel: "📻 Ping the Silver Antenna",
    drawingMood: 'antenna'
  },
  {
    id: 10,
    chapterNumber: "SCENE 10",
    title: "Footsteps in the Hallway",
    kidDoodleTag: "👟 DAD IS COMING!",
    storyText: "Thump, thump, thump! Rapid footsteps echoed down the hallway. Prajwal's dad had heard the loud crash from the other room and rushed in to see what had happened to the furniture.",
    kidVoiceNote: "For one second, I thought: 'Uh oh, am I grounded for launching the car off the dinner table?!'",
    audioPrompt: "Rapid footsteps echoed down the hallway. Prajwal's dad had heard the loud crash and rushed in to see what had happened.",
    actionButtonLabel: "👂 Listen to Approaching Footsteps",
    drawingMood: 'footsteps'
  },
  {
    id: 11,
    chapterNumber: "SCENE 11",
    title: "The Joyous Flying Dad Hug",
    kidDoodleTag: "🤗 BEST DAD IN THE WORLD",
    storyText: "Instead of being angry, Dad took one look at Prajwal's awe-struck face, broke into a wide grin, swooped down, and scooped him high into the air! 'You really are a trouble-maker, aren't you?' he laughed in a warm bear hug.",
    kidVoiceNote: "He lifted me so high my hair brushed the lamp shade! He wasn't mad about the toy at all—he saw how excited I was.",
    audioPrompt: "Instead of being angry, Dad took one look at Prajwal's awe-struck face, broke into a wide grin, swooped down, and scooped him high into the air!",
    actionButtonLabel: "❤️ Lift Prajwal Into the Air!",
    drawingMood: 'dad-hug'
  },
  {
    id: 12,
    chapterNumber: "SCENE 12",
    title: "The Living Room Carpet Lesson",
    kidDoodleTag: "💡 HARDWARE VS CODE",
    storyText: "Right there on the floor, Dad sat down cross-legged among the scattered plastic. He pointed at each part, explaining the difference between hardware—the body and wheels—and software—the invisible instructions that give machines life.",
    kidVoiceNote: "Dad said: 'Hardware is like your muscles, but code is like your thoughts telling your feet when to jump!' It made total sense.",
    audioPrompt: "Right there on the floor, Dad sat down cross-legged among the scattered plastic, explaining the difference between hardware and software.",
    actionButtonLabel: "🧠 Learn How Code Guides Machines",
    drawingMood: 'carpet-talk'
  },
  {
    id: 13,
    chapterNumber: "SCENE 13",
    title: "Eyes Glowing Like LEDs",
    kidDoodleTag: "✨ SPARK OF CURIOSITY",
    storyText: "Prajwal's eyes practically glowed like green LEDs. He fired a hundred questions a second: How do the copper roads know where to send electricity? Can a computer talk to the wheels? Can we make the car fly for real?",
    kidVoiceNote: "My brain was buzzing so hard it felt like static electricity in winter! I wanted to build my own circuit right then and there.",
    audioPrompt: "Prajwal's eyes practically glowed like green LEDs. He fired a hundred questions a second: How do the copper roads know where to send electricity? Can we make it fly?",
    actionButtonLabel: "💡 Light Up Prajwal's LED Eyes",
    drawingMood: 'led-eyes'
  },
  {
    id: 14,
    chapterNumber: "SCENE 14",
    title: "To the Big Glowing Screen",
    kidDoodleTag: "🖥️ THE MAGIC DESK",
    storyText: "Dad smiled, stood up, and pulled Prajwal toward the family computer desk. The big monitor illuminated the room with a soft glow. Dad opened up a terminal and said, 'If you learn how to guide these machines, you can invent anything from scratch.'",
    kidVoiceNote: "The computer screen felt huge, like the cockpit of a starship. Green letters were blinking on the black screen waiting for my commands.",
    audioPrompt: "Dad pulled Prajwal toward the family computer desk. The big monitor illuminated the room with a soft glow: If you learn how to guide these machines, you can invent anything from scratch.",
    actionButtonLabel: "💻 Sit at the Glowing Computer Screen",
    drawingMood: 'monitor-desk'
  },
  {
    id: 15,
    chapterNumber: "SCENE 15",
    title: "What Awesome Thing Next?",
    kidDoodleTag: "🚀 THE INVENTOR'S CREED",
    storyText: "Staring into the bright monitor, 8-year-old Prajwal smiled. In that moment, a future engineer, inventor, and problem-solver was born. His mind raced with a single, unstoppable question: 'What awesome thing am I going to make next?'",
    kidVoiceNote: "From that day on, I never looked at broken things the same way. Every broken toy is just an invention waiting for new code!",
    audioPrompt: "Staring into the bright monitor, eight-year-old Prajwal smiled. His mind raced with a single, unstoppable question: What awesome thing am I going to make next?",
    actionButtonLabel: "🌟 Launch Prajwal's Invention Journey",
    drawingMood: 'future-invention'
  }
];
