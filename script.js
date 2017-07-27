function getRevisionList() {
  return document.querySelector('.post-meta');
}

function getNMonthDate(date, n) {
  date.setMonth(date.getMonth() - n);
  return date;
 }

 function getLastUpdateDate(revisionList) {
   return new Date(revisionList.lastElementChild.querySelector('.post-author__date').innerHTML);
 }

 function showCaution() {
   var mainColumn = document.querySelector('.post-body');
   if (mainColumn != null) {
     var cautionElement = document.createElement('div');
     cautionElement.innerHTML = '<div align="center" style="border: solid 3px #ffd700; padding: 20px; font-size: 100%; margin: 20px; background-color: #fffacd"><strong>この記事は過去半年間更新されていません。情報が古い可能性があります。</strong></br>※記事を更新するとこの注意書きは消えます。</div>';
     mainColumn.parentNode.insertBefore(cautionElement, mainColumn);
   }
 }

function checkCaution() {
  var revisionList = getRevisionList();
  if (revisionList != null) {
    var oneYearsDate = getNMonthDate(new Date(), 7);
    var lastUpdateDate = getLastUpdateDate(revisionList);
    if (oneYearsDate.getTime() > lastUpdateDate.getTime()) {
      showCaution();
    }
  }
}

checkCaution();
