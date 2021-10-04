              //strict mode
              strict();
              notStrict();
              function strict() {
                 // Function-level strict mode syntax
                 'use strict';
                 function nested() { 
                     return 'Nested function.';
                 }
                 console.log( "This is a strict mode function.  " + nested());
               }
              function notStrict() { console.log( "This is not strict." );
             } 