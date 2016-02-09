// ==UserScript==
// @name       WestlawNext outside-of-plan filter
// @namespace  https://github.com/ChaIcuWo/WestlawNext-Outside-Plan-filter
// @version    0.1
// @description  hides out of plan search results
// @match      https://a.next.westlaw.com/Search/Results.html?*
// @copyright  2012+
// ==/UserScript==

GM_addStyle("li.co_outOfPlan { display: none !important; }"); 