window.addEventListener('DOMContentLoaded', function() {
  var container = document.getElementById('container');
  fetch(`/container.md`).then(res => res.text()).then(data => {
    container.innerHTML = `<h1 style="padding: 50px">SỐ LẦN ĐỊT MẸ <b>PNV</b></h1>
<!-- Start of CuterCounter Code -->
<a href="#" target="_blank"><img src="https://www.cutercounter.com/hits.php?id=hxfakxd&nd=7&style=20" border="0"
    alt="hit counter"></a>
<!-- End of CuterCounter Code -->
<h1 style="padding: 50px 30px">ĐỊT MẸ <b>PNV</b></h1>
<zero-md src="./container.md"></zero-md>
`+ window.hiddenCache + data + container.innerHTML + `<p style="font-size:11px;margin:1rem" aria-hidden="true"> 
</p>`;

  })

})
