const channels = [
  { id: 1, name: 'react' },
  { id: 2, name: 'redux', hasUnreads: true },
  { id: 3, name: 'mobx' },
  { id: 4, name: 'react-router' }
];

const people = [
  { id: 1, name: 'Dave' },
  { id: 2, name: 'Sarah' },
  { id: 3, name: 'Zack' },
  { id: 4, name: 'Pam' },
  { id: 5, name: 'Erin' },
  { id: 6, name: 'Joe' }
];

// With a 'for' loop:
/*
function generateFakeMessages(count) {
  let messages = [];

  for(let i = 0; i < count; i++) {
    const userName = randomUser();
    messages.push({
      id: i,
      userName,
      text: `A message from ${userName}`,
      timestamp: new Date()
    });
  }

  return messages;
}
*/

// With 'map':
function generateFakeMessages(count) {
  return Array.from(Array(count).keys()).map(i => {
    const userName = randomUser();
    return {
      id: i,
      userName,
      text: `A message from ${userName}`,
      timestamp: new Date()
    };
  })
}

function randomUser() {
  return people.map(p => p.name)[Math.floor(Math.random() * 1000) % people.length];
}

function createFakeActivity(channels, maxMessages) {
  return channels.reduce((result, channel) => {
    const rndNum = Math.floor(Math.random() * maxMessages);
    result[channel.id] = generateFakeMessages(rndNum);
    return result;
  }, {});
}

export { channels, people, createFakeActivity };
