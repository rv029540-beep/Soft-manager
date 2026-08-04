const menu = [
{ name: "Dashboard", page: "dashboard.html" },
{ name: "Inventory", page: "html/inventory.html" },
{ name: "Purchase Order Creation", page: "purchase-order-creation.html" },
{ name: "Purchase Order List", page: "purchase-order-list.html" },
{ name: "Material Issue Voucher", page: "material-issue-voucher.html" },
{ name: "Material Return Voucher", page: "material-return-voucher.html" },
{ name: "Vendor Master", page: "vendor-master.html" },
{ name: "Stock Report", page: "stock-report.html" },
{ name: "Settings", page: "settings.html"},
{ name: "Stock ledger", page: "Stock-ledger.html"}
];

searchBox.addEventListener("input", function(){
const searchText = searchBox.value.toLowerCase().trim();
if(!searchText){ searchResults.classList.remove("show"); return; }
const result = menu.filter(item => item.name.toLowerCase().includes(searchText));
if(result.length === 0){ searchResults.classList.remove("show"); return; }
searchResults.innerHTML = result.map(item => `<li data-page="${item.page}">${item.name}</li>`).join('');
searchResults.classList.add("show");
});
searchResults.innerHTML = menu.map(item => `<li data-page="${item.page}">${item.name}</li>`).join('');
searchResults.addEventListener("click", function (e) {

    if (e.target.tagName === "LI") {

        window.location.href = e.target.dataset.page;

    }

});