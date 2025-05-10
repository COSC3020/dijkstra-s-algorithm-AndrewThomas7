# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”-Andrew Thomas

Sources

#1-https://sethuram52001.medium.com/data-structures-weighted-graphs-3cd86b1b5aa9- Learned how to represent weighted graphs here

#2-https://www.youtube.com/watch?v=_lHSawdgXpI- Learned about how Dijkstra's algorithm worked here and based my code off the process presented in visual representation.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

# Answer

We will walk through the algorithm step by step to determine it's time complexity.

Note before I start that I am using an Adjacency matrix implementation.

Our function starts off by creating two arrays. The first one is the distance list, which will eventually return all the shortest paths.The second is the visited array which represents which nodes we have and have not visited (initalized with all zeros). 
Since both of these operations create arrays that are the length of the graph we get $V+V$ here.
The next 3 operations are neglibable. But we do mark the sourcenodes distance as zero here which is important for how the algorithm works.

Next we create function closure to carry out our work. We then call it at the source node. We mark the node we are at as visited and fill the edgelist with the given edges from whatever node we happen to be on. These are still negligible operations. The next operation finds the smallest non-zero edge in the edgelist, this has a complexity of $\frac{1}{V}\cdot E$ because we are eseentially just looking at the edge weights for one node.

The next step involves pushing the smallest distances he distance list, this just runs the length of the edgelist, giving us antother $\frac{1}{v}\cdot E$.

We then do a check to see if all nodes have been visited. This runs a helper function, which runs the length of the Visited list, giving a complexity of $V$.

Then we recusrively call over all the items in the graph. Which in this case is the entire length of the graph giving $|V|^2$

All together we then have, $$V+V+\frac{2}{V}\cdot E+V+V^2=V^2\in \theta(V^2)$$
