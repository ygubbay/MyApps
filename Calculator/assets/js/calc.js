


const calc_modes = [{ name: 'Standard', value: 0, operations: ['+', '-', '*', '/'] },
                    { name: 'Scientific', value: 1, operations: ['+', '-', '*', '/', 'x^y', 'root'] },
                    { name: 'Programmer', value: 2, operations: ['+', '-', '*', '/', 'mod'] },];
export class Calculator {

    
    constructor() {

        

        this.expr1 = '';
        this.expr2 = '';
        

        this.mode = calc_modes[0];
        this.operator = calc_modes[0].operations[0];

        this.answer = '';

    }




    renderModes()
    {
        var html = '<div id="calc_mode">';
        for (var i=0; i<calc_modes.length; i++)
        {

            var is_checked = calc_modes[i].value == this.mode.value ? "checked='true'": '';
            var margin_left = i > 0? "style='margin-left: 20px'": "";
            html += `
                    <span ` + margin_left + `>
                        <input type="radio" name="calc_mode" id="` + calc_modes[i].value + `" ` + is_checked + ` />
                        ` + calc_modes[i].name + `
                     </span>`;
        }
        html += '</div>'
        return html;
    }

    renderOperationOptions() {
        var html = ``;

        for (var i=0; i<this.mode.operations.length; i++)
        {
            html += '<option>' + this.mode.operations[i] + '</option>'
        }

        return html;
    }


    renderExpressions() {
        
        this.expr1 = '';
        this.expr2 = '';

        var html = `<div>

            <div class="col-expr">
                <input class="text-expr" type="text" id="expr1" value="` + this.expr1 + `" onchange="''" />
            </div>
            <div class="col-expr">
                <select class="select-expr" id="operator">`
                + this.renderOperationOptions() + 
                `</select>
            </div>
            <div class="col-expr">
                <input  class="text-expr" type="text" id="expr2" value="` + this.expr2 + `" />

            </div>
            <div class="col-expr" style="width: 20px">
            =
            </div>
            <div class="col-expr">
            <span id="result">` + this.result + `</span>
            </div>
            <div style="clear: both"></div>

        </div>`;

       

        return html;
        
    }
    
    renderPage() {

        this.calculateAnswer();

        var html = ` <div>

        <h1>Calculator</h1>
        <hr />

        ` + this.renderModes() + 
         this.renderExpressions() +
        
        `</div>`;

   

        $('#pageDiv').html(html);

        this.pageListeners();

    }


    calculateAnswer() {
        var x = this.expr1;
        var y = this.expr2;

        var op = this.operator;

        switch(op) 
        {
            case '+':
                this.answer = x + y;
            break;
            case '-':
                this.answer = x - y;
            break;
            case '*':
                this.answer = x * y;
            break;
            case '/':
                this.answer = x / y;
            break;
            case 'x^y':
                this.answer = Math.pow(x, y);
            break;
            case 'root':
                this.answer = Math.pow(x, 1/y);
            break;
            case 'mod':
                this.answer = x % y;
            break;
            default: 
                this.answer = 'error';
            break;
        }
        this.answer = !this.answer && this.answer !== 0 ? '': this.answer;
        
    }

    updateAnswer() {

        $('#result').text(this.answer);
    }


    pageListeners() { 
        
        var _this = this;
        $('#expr1').on('input', function() {
            _this.expr1 = parseInt($('#expr1').val());
            _this.calculateAnswer();
            _this.updateAnswer();
        });
      
        $('#expr2').on('input', function() {
            _this.expr2 = parseInt($('#expr2').val());
            _this.calculateAnswer();
            _this.updateAnswer();
        })

        $('#operator').change(function() {
            _this.operator = $('#operator').val();
            _this.calculateAnswer();
            _this.updateAnswer();
        })

        $("input[name=calc_mode]:radio").change(function () {

            _this.mode = calc_modes[parseInt(this.id)]; 
            _this.renderPage();
        });
        

    }

}

