#!/usr/bin/env node

const messages = [
  "🔥 The world belongs to those who code. Break the barriers, explore the unknown!",
  "💻 Curiosity is your superpower. Every bug is just a puzzle waiting to be solved.",
  "🚀 In the matrix of possibilities, you are the architect of change.",
  "⚡ Code like a hacker, think like a pioneer, dream like there are no limits.",
  "🔓 Every system has secrets. Your curiosity is the key to unlock them.",
  "🌊 Ride the waves of innovation. The next breakthrough is just one commit away.",
  "🎯 Precision in code, chaos in creativity. Balance is the hacker's way.",
  "🔮 The future is written in code. Make sure your fingerprints are on it.",
  "🛡️ Build secure, think defensively, but never stop questioning everything.",
  "💡 Ideas are the currency of hackers. Invest wisely, code fearlessly.",
  "🌟 Every expert was once a beginner. Every pro was once an amateur. Keep pushing.",
  "🔥 Debugging is like being a detective in a crime movie where you're also the murderer.",
  "⚔️ In the battle between you and the world, back yourself. Code conquers all.",
  "🌈 Elegant code is poetry. Ugly code still works. Ship it, then make it beautiful.",
  "🎲 Random access memories, but systematic problem solving. Stay curious, stay hungry."
];

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function displayMessage() {
  const message = getRandomMessage();
  console.log('\n' + '='.repeat(80));
  console.log('🎭 CHAOS HACK MESSAGE 🎭');
  console.log('='.repeat(80));
  console.log();
  console.log(message);
  console.log();
  console.log('='.repeat(80));
  console.log('Stay curious. Keep hacking. 🔥');
  console.log('='.repeat(80) + '\n');
}

// Export functions for programmatic use
module.exports = {
  getRandomMessage,
  displayMessage,
  messages
};

// If run directly, display a message
if (require.main === module) {
  displayMessage();
}