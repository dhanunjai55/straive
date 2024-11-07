export default function json2html(data) {
  // Start the table with a data-user attribute
  let html = '<table data-user="dhanunjaig5@gmail.com">';
  
  // Add the table header
  html += "<thead><tr>";
  const headers = ["Name", "Age", "Gender"];
  headers.forEach(header => html += `<th>${header}</th>`);
  html += "</tr></thead>";
  
  // Add the table body
  html += "<tbody>";
  data.forEach(row => {
    html += "<tr>";
    headers.forEach(header => html += `<td>${row[header] || ""}</td>`);
    html += "</tr>";
  });
  html += "</tbody></table>";
  
  return html;
}
