<html>
    <head>
        <script src='https://kerrishaus.com/assets/scripts/jquery-3.6.0.min.js'></script>
    </head>
    <body>
        <style>
            *
            {
                box-sizing: border-box;
            }
        
            .keyboard
            {
                border: 3px solid black;
                
                box-shadow: 0px 0px 10px 0px #00000099;
                
                background-color: #666;
                padding: 4px;
                
                display: flex;
                justify-content: space-between;
                
                max-width: 60vw;
                max-height: 30vh;
            }
            
            .keyboard > .alphakeys
            {
                width: 80%;
                
                display: flex;
                flex-wrap: wrap;
                
                margin-right: 4px;
            }
            
            .keyboard > .alphakeys > div
            {
                flex-grow: 1;
            }
            
            .keyboard > .alphakeys > .row-breaker
            {
                flex-basis: 100%;
                padding: 0px;
                margin: 0px;
                height: 0px;
            }
            
            .keyboard > .numberpad
            {
                width: 20%;
                
                display: flex;
                flex-wrap: wrap;
            }
            
            .keyboard > div > div
            {
                padding: 10px 0px;
                background-color: #222;
                color: white;
                margin: 1px;
                text-align: center;
                text-transform: uppercase;
            }
            
            .keyboard > div > div:hover
            {
                background-color: #444;
            }
            
        </style>
    
        <script>
            let keyboard = `
            <div class='keyboard' id='keyboard'>
                <div class='alphakeys'>
                    <div class='key'>tab</div>
                    <div class='key'>q</div>
                    <div class='key'>w</div>
                    <div class='key'>e</div>
                    <div class='key'>r</div>
                    <div class='key'>t</div>
                    <div class='key'>y</div>
                    <div class='key'>u</div>
                    <div class='key'>i</div>
                    <div class='key'>o</div>
                    <div class='key'>p</div>
                    <div class='key'>[</div>
                    <div class='key'>]</div>
                    <div class='key'>\\</div>
                    <div class='key'>backspace</div>
                    
                    <div class='row-breaker'></div>
                    
                    <div class='key'>caps lock</div>
                    <div class='key'>a</div>
                    <div class='key'>s</div>
                    <div class='key'>d</div>
                    <div class='key'>f</div>
                    <div class='key'>g</div>
                    <div class='key'>h</div>
                    <div class='key'>j</div>
                    <div class='key'>k</div>
                    <div class='key'>l</div>
                    <div class='key'>;</div>
                    <div class='key'>'</div>
                    <div class='key'>return</div>
                    
                    <div class='row-breaker'></div>
                    
                    <div class='key'>shift</div>
                    <div class='key'>z</div>
                    <div class='key'>x</div>
                    <div class='key'>c</div>
                    <div class='key'>v</div>
                    <div class='key'>b</div>
                    <div class='key'>n</div>
                    <div class='key'>m</div>
                    <div class='key'>,</div>
                    <div class='key'>.</div>
                    <div class='key'>/</div>
                    <div class='key'>shift</div>

                    <div class='row-breaker'></div>
                    
                    <div class='key'>space</div>
                </div>
                
                <div class='numberpad'>
                    
                    <div class='key' style='width: calc(25% - 2px)'>7</div>
                    <div class='key' style='width: calc(25% - 2px)'>8</div>
                    <div class='key' style='width: calc(25% - 2px)'>9</div>
                    <div class='key' style='width: calc(25% - 2px)'>x</div>
                    
                    <div class='key' style='width: calc(25% - 2px)'>4</div>
                    <div class='key' style='width: calc(25% - 2px)'>5</div>
                    <div class='key' style='width: calc(25% - 2px)'>6</div>
                    <div class='key' style='width: calc(25% - 2px)'>+</div>
                    
                    <div class='key' style='width: calc(25% - 2px)'>1</div>
                    <div class='key' style='width: calc(25% - 2px)'>2</div>
                    <div class='key' style='width: calc(25% - 2px)'>3</div>
                    <div class='key' style='width: calc(25% - 2px)'>-</div>
                    
                    <div class='key' style='width: calc(50% - 2px)'>0</div>
                    <div class='key' style='width: calc(25% - 2px)'>.</div>
                    <div class='key' style='width: calc(25% - 2px)'>/</div>
                </div>
            </div>`;
            
            // '
            
            let keyboardEnabled = false;
            
            let focusedInput = null;
            
            $("body").on("focusout", "input, textarea", function(event)
            {
                if (keyboardEnabled)
                    hideKeyboard();
            })
            
            $("body").on("focusin", "input, textarea", function(event)
            {
                if (!keyboardEnabled)
                    showKeyboard();
            })
            
            $("body").on("mousedown", "#keyboard", function(event)
            {
                event.preventDefault();
            });
            
            $("body").on("mousedown", ".key", function(event)
            {
                event.preventDefault();
                
                switch (event.target.innerHTML)
                {
                    case "backspace":
                        focusedInput.value += "a";
                        break;
                    default:
                        focusedInput.value = focusedInput.value + event.target.innerHTML;
                        break;
                }
            });
            
            function showKeyboard()
            {
                $("body").append($(keyboard));
                
                keyboardEnabled = true;
                focusedInput = document.activeElement;
            }
            
            function hideKeyboard()
            {
                $("#keyboard").remove();
                
                keyboardEnabled = false;
                focusedInput = null;
            }
            
            function onKeyDown(event)
            {
                
            }
            
            function onKeyUp(event)
            {
                
            }
            
            function onMouseDown(event)
            {
                
            }
            
            function onMouseUp(event)
            {
                
            }
            
            function onMouseMove(event)
            {
                
            }
            
            function onTouchStart(event)
            {
                
            }
            
            function onTouchEnd(event)
            {
                
            }
            
            function onTouchMove(event)
            {
                
            }
        </script>
        
        <input type='text' name='test' id='test' value='fuck'></input><br/>
        <textarea type='text' name'testarea' id='testarea' value='big fuck'></textarea><br/>
        <input type='password'><br/>
        <input type='email'><br/>
        <input type='number'><br/>
        <input type='date'><br/>
        <input type='time'><br/>
        <input type='datetime'><br/>
    </body>
</html>
