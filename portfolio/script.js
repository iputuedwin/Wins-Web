
  window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.scrollHeight - window.innerHeight;
    let scrollPercent = scrollTop / docHeight;

    // Warna awal → peach (#fce3d3) ke hijau muda (#b5ead7)
    let start = [252, 227, 211];
    let end   = [181, 234, 215];

    let r = Math.floor(start[0] + (end[0] - start[0]) * scrollPercent);
    let g = Math.floor(start[1] + (end[1] - start[1]) * scrollPercent);
    let b = Math.floor(start[2] + (end[2] - start[2]) * scrollPercent);

    document.body.style.background = `rgb(${r}, ${g}, ${b})`;
  });

  
