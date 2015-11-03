/**
 * Created by lei on 2015/10/27.
 */
/*
* show button show image 1 and 2
* hide button hide image 1 and 2
* replace replace image 1 with image 2
* */
var imge1 = document.getElementById('img1');
var imge2 = document.getElementById('img2')
document.getElementById('show').onclick= function () {
    imge1.src='../../../../IMG/anoceanofsky.jpg'
    imge2.src='../../../../IMG/350.jpg'

}
document.getElementById('hidden').onclick= function () {
    imge1.style.visibility='hidden';
    imge2.style.visibility='hidden';

}
document.getElementById('replace').onclick= function () {
    imge2.src='../../../../IMG/anoceanofsky.jpg'

}