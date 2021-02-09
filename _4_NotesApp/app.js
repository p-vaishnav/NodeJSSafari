//command line arguments
const yargs = require('yargs');
yargs.command({
    command:'remove',
    describe:'add note to notes app',
    handler:function(){
        console.log('priniting as per add');
    }
});


yargs.command({
    command:'add',
    describe:'remove note to notes app',
    builder : {
        title:{
            describe:'Note of title',
            demandOption:true,
            type:'string'
            
        },
        body:{
            describe:'Body of title',
            demandOption:true,
            type:'string'
            
        }
    },
    handler:function(argv){
        console.log(argv.title + ' : ' + argv.body);
    }
});

yargs.command({
    command:'read',
    describe:'read note to notes app',
    handler:function(){
        console.log('printing title  : ',argv.title)
    }
});

yargs.command({
    command:'list',
    describe:'list note to notes app',
    handler:function(){
        console.log('printing as per list')
    }
});

console.log(yargs.argv)

//add remove read list