class Queue
attr_reader :array
    def initialize
        @array = []
    end

    def enqueue(ele)
        array.push(ele)
    end 

    def dequeue
        array.shift
    end 

    def peek 
        array.last 
    end 


end 