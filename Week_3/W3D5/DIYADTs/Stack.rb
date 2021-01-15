class Stack
    attr_reader :array

    def initialize
      @array = []
    end

    def push(ele)
      array.push(ele)
    end

    def pop
      array.pop
    end

    def peek
      array.last
    end
end
