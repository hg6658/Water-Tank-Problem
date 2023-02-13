
class waterHeights{
    
    constructor(){
        this.heights = [0,4,0,0,0,6,0,6,4,0];
        //this.heights = [0,1,0,2,1,0,1,3,2,1,2,1];
        this.waterHeight = [];
        this.totalWater=0;
        this.trap();
        this.fillTable();
    }
    
    trap(){
        
        var left = [];
        var right = [];
        left[0] = this.heights[0];
        for(let i=1;i<this.heights.length;i++){
            left[i] = Math.max(left[i-1],this.heights[i]);
        }
        right[this.heights.length-1] = this.heights[this.heights.length-1];
    
        for(let i=this.heights.length-2;i>=0;i--){
            right[i] = Math.max(right[i+1],this.heights[i]);
        }
        let totalWater =0;
        for(let i=0;i<this.heights.length;i++){
            this.waterHeight[i] = Math.min(right[i],left[i])-this.heights[i];
            totalWater += parseInt(this.waterHeight[i]);
        }
        
        this.totalWater=totalWater;
    }

    fillTable(){
        let rows = Math.max(...this.heights)+1;
        let columns = this.heights.length;
        $('#container').empty();

        for(let i=0;i<columns;i++){
            let row= $('<div id="row"></div>');
            for(let j=0;j<rows-(this.waterHeight[i]+this.heights[i]);j++){
                let cell = $('<div id="cell"></div>');
                row.append(cell);
            }
            for(let j=0;j<this.waterHeight[i];j++){
                let cell = $('<div id="cell" style="background: blue"></div>');
                row.append(cell);
            }
            for(let j=0;j<this.heights[i];j++){
                let cell = $('<div id="cell" style="background:orange"></div>');
                row.append(cell);
            }
            $('#container').append(row);
        }

        $('#totalWater').empty().append(`<b>${this.totalWater}</b>`);
    }

}

new waterHeights();