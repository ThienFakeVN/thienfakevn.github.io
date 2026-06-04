let globalData = null;

async function getData() {
  try {
    const response = await fetch('https://lichess.org/api/puzzle/daily');
    const data = await response.json();
    
    globalData = data; // Assign to global variable
    //console.log('Data loaded:', globalData);
  } catch (error) {
    console.error('Error:', error);
  }
}

await getData();
console.log(globalData); // ✅ Data is available here