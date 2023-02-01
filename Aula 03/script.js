var listaHqs = ['https://upload.wikimedia.org/wikipedia/pt/5/53/Batman_%28revista_em_quadrinhos%29.jpg', 'https://m.media-amazon.com/images/I/A16Ao3qYQUL.jpg', 'https://m.media-amazon.com/images/I/91IfQc1qeOL.jpg', 'https://40.media.tumblr.com/f50c1c22d4e77d693abb9bfc49cc5c84/tumblr_nsq4qw7X6L1rx5px6o1_1280.jpg', 'https://s2.glbimg.com/Eix5n4Mb9fmjYPWDkV6bjiqrwOs=/0x0:620x948/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/E/S/G9rv5KRAGyrAI7e5uiBQ/2011-10-27-a1j2kc2g.jpg', 'https://www.adobe.com/br/express/feature/image/media_142f9cf5285c2cdcda8375c1041d273a3f0383e5f.png?width=750&format=png&optimize=medium']
var nomeHqs = ['Batman', 'Superman', 'Demolidor', 'IronMan', 'Liga da Justiça'];
var i = 0;

for(var i=0; i<listaHqs.length; i++){

    if(listaHqs[i].indexOf("jpg") !==-1){
        document.write('<img src=' + listaHqs[i] + '>');
        document.write('<h2>' + nomeHqs[i] + '</h2>')

    }
   
}

// Laço com While

//
//while(i<listaHqs.length){
//    i++;
//    document.write('<img src=' + listaHqs[i] + '>');
//}

