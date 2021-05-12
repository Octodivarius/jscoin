class Block{
    constructor(timestapm, previousHash, hash, data ) {
        this.timestapm = timestapm;
        this.previousHash = previousHash;
        this.hash = hash;
        this.data = data;
    }

    static get genesis(){
        const timestamp = (new Date(2000,0,1)).getTime();
        return new this(timestamp, undefined, '_g3n3s1s-h4sh','I like Ramen')

    }
    toString() {        
      const{
            timestapm, previousHash, hash, data,  
      } = this;

      return `Block - 
        timestamp     :  ${timestapm}
        previousHash  :  ${previousHash}
        hash          :  ${hash}
        data          :  ${data}
        `;
    }

}


export default Block;