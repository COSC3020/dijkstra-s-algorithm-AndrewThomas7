function FindSmallestEdge(node){
    var NonZeroList=[]    
    var smallest;
    for(var x=0;x<node.length;x++){
        if(node[x]!=0&&node[x]!=Infinity){
            NonZeroList.push(node[x])
        }
    }
    smallest=NonZeroList[0]
    for(var y=0; y<NonZeroList.length;y++){
        if(NonZeroList.length==1){
            smallest=NonZeroList[0]
            break
        }
        if(NonZeroList[y]>NonZeroList[y+1]){
            smallest=NonZeroList[y+1]
        }
    }
    return smallest
}

function ArrayCompare(array,no){
    var Equal=false;
    var count=0;
    for(var m=0; m<array.length;m++){
        if(array[m]==no){
            count++
        }
    }
    if(count>=array.length){
        Equal=true
    }
    return Equal
}
function Dijisktras(graph,sourceNode){
    var Distancelist=new Array(graph.length).fill(Infinity)
    var Visited= new Array(graph.length).fill(0)
    var edgelist=[]
    var smallest=0;
    Distancelist[sourceNode]=0;
    function Dijisktras_(node){
        Visited[node]=1;
        edgelist=graph[node];
        smallest=FindSmallestEdge(edgelist);

        for(var x=0; x<edgelist.length;x++){
            if(edgelist[x]!=Infinity&& edgelist[x]!=0&& node!=sourceNode){
                if(edgelist[x]+Distancelist[node]<=Distancelist[x]){
                    Distancelist[x]=edgelist[x]+Distancelist[node]
                }
            }
            else if(edgelist[x]!=Infinity&& edgelist[x]!=0){
                if(edgelist[x]<=Distancelist[x]){
                    Distancelist[x]=edgelist[x]
                }
            }
        }
        if(ArrayCompare(Visited,1)){
            return
        }    
        for( weight of edgelist){
                if(weight==smallest && Visited[edgelist.indexOf(smallest)]!=1){
                    Dijisktras_(graph[node].indexOf(weight))
                }
                else if(Visited[edgelist.indexOf(smallest)]==1&& Visited[edgelist.indexOf(weight)]!=1){
                    Dijisktras_(graph[node].indexOf(weight))
                }
            }
        }
        Dijisktras_(sourceNode)
        return Distancelist
    }
