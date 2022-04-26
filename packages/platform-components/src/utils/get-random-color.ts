const colors = ['#2e8b57', '#1e90ff', '#8a2be2', '#00ba5d', '#568e90', '#ff2592', '#9e7817', '#709625'];

const getRandomColor = () => colors[Math.floor(Math.random()*colors.length)];

export default getRandomColor;
