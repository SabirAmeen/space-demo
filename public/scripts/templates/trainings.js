module.exports = [

    '<article class="train-article">',
    '<header class="train-article-head">',
    '<a href=""><%=trainingName%></a>',
    '</header>',
    '<span id="train-name">Who: <%=name%></span>',
    '<span id="train-time">When: <%=time%></span>',
    '<span id="train-loc">Where: <%=location%></span>',
    '<span id="train-seat">Seats remaining: <%=seatsNo%></span>',
    '<span id="train-status">Training Status: <%=status%></span>',
    '<div id="attend">',
    '<button>Attend this training</button>',
    '</div>',
    '</article>'

].join('');
