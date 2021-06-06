const candyMachine = {
  status: {
    name: 'node',
    count: 5,
  },
};

const {status: {count}} = candyMachine;
console.log(count)
