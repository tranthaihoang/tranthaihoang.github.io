$(document).ready(function() {
            alert('test7');
            var md = new MobileDetect(window.navigator.userAgent);
            var medias = { audio : false, video : {

                    facingMode : {
                        exact : "environment" // rear camera
                    }
                }},
                video  = document.getElementById("video"),
                canvas = document.getElementById("qr-canvas"),
                ctx    = canvas.getContext("2d");

            var $video = $('#video'), $canvas = $('#qr-canvas');

            /**
             * isFound : has found qr code result
             * @type {boolean}
             */
            var isFound = false;
            /**
             * readQRCode
             * @param result
             */
            function readQRCode(result) {
                if(result.indexOf("http://") === 0 || result.indexOf("https://") === 0)
                    {
                        if(!isFound)
                        {
                            alert(result);
                            window.location.href = result.toString();
                            isFound = true;
                        }
                    }
            }
            // set qr code result to readQRCode fn
            qrcode.callback = readQRCode;
            //draw canvas
            requestAnimationFrame(draw);
            // set video stream
            function successCallback(stream) {
                video.srcObject = stream;
            }
            // error on video stream
            function errorCallback(err) {
                $("#message").text(err.name).show();
            }

            /**
             * draw video to canvas
             */
            function draw() {
                var w = $video.width()/2;
                var h = $video.height()/2;
                var halfW = w/2;
                var halfH = h/2;
                //$canvas.css('width',w*2).css('height',h*2);
                //ctx.drawImage(video, halfW, halfH, w ,h, 0,0, w*2 ,h);
                 ctx.drawImage(video, halfW, halfH);
                // 10.4 W, 10.4 H
                //
                try{
                    setTimeout(function () {
                        try{
                            //try to decode from image
                            qrcode.decode();
                        }catch (ex){
                            console.log(ex);
                        }
                        requestAnimationFrame(draw);
                    },500)
                }catch (e){
                }
            }

            /**
             * get video from camera
             */
            function scan() {
                try{
                    navigator.getUserMedia(medias, successCallback, errorCallback);
                }catch (err){
                    console.log(err);
                    $("#message").text(JSON.stringify(err)).show();
                }
            }
            if (md.mobile()) {
                scan();

            }else {
               $("#message").text('Only work on mobile').show();
            }
        });
