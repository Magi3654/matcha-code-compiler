// Generated from ./grammar/Compilador.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,13,78,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,57,8,6,1,7,1,7,1,8,1,8,
1,9,1,9,1,10,1,10,1,11,4,11,68,8,11,11,11,12,11,69,1,12,4,12,73,8,12,11,
12,12,12,74,1,12,1,12,0,0,13,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,
10,21,11,23,12,25,13,1,0,2,6,0,42,43,45,45,47,57,65,90,95,95,97,122,3,0,
9,10,13,13,32,32,81,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,
1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,
0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,1,27,1,0,0,0,3,29,1,0,0,0,5,31,1,
0,0,0,7,33,1,0,0,0,9,35,1,0,0,0,11,37,1,0,0,0,13,56,1,0,0,0,15,58,1,0,0,
0,17,60,1,0,0,0,19,62,1,0,0,0,21,64,1,0,0,0,23,67,1,0,0,0,25,72,1,0,0,0,
27,28,5,123,0,0,28,2,1,0,0,0,29,30,5,125,0,0,30,4,1,0,0,0,31,32,5,61,0,0,
32,6,1,0,0,0,33,34,5,40,0,0,34,8,1,0,0,0,35,36,5,41,0,0,36,10,1,0,0,0,37,
38,5,99,0,0,38,39,5,104,0,0,39,40,5,105,0,0,40,41,5,99,0,0,41,42,5,104,0,
0,42,43,5,97,0,0,43,44,5,107,0,0,44,12,1,0,0,0,45,46,5,103,0,0,46,47,5,101,
0,0,47,48,5,117,0,0,48,57,5,109,0,0,49,50,5,104,0,0,50,51,5,97,0,0,51,52,
5,110,0,0,52,57,5,97,0,0,53,54,5,115,0,0,54,55,5,97,0,0,55,57,5,109,0,0,
56,45,1,0,0,0,56,49,1,0,0,0,56,53,1,0,0,0,57,14,1,0,0,0,58,59,5,42,0,0,59,
16,1,0,0,0,60,61,5,47,0,0,61,18,1,0,0,0,62,63,5,43,0,0,63,20,1,0,0,0,64,
65,5,45,0,0,65,22,1,0,0,0,66,68,7,0,0,0,67,66,1,0,0,0,68,69,1,0,0,0,69,67,
1,0,0,0,69,70,1,0,0,0,70,24,1,0,0,0,71,73,7,1,0,0,72,71,1,0,0,0,73,74,1,
0,0,0,74,72,1,0,0,0,74,75,1,0,0,0,75,76,1,0,0,0,76,77,6,12,0,0,77,26,1,0,
0,0,4,0,56,69,74,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CompiladorLexer extends antlr4.Lexer {

    static grammarFileName = "Compilador.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'{'", "'}'", "'='", "'('", "')'", "'chichak'", 
                         null, "'*'", "'/'", "'+'", "'-'" ];
	static symbolicNames = [ null, null, null, null, null, null, "CHICHAK", 
                          "PR", "GOPSSEM", "NANU", "DO", "PPAEDA", "GEULSSI", 
                          "GONG" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "CHICHAK", 
                      "PR", "GOPSSEM", "NANU", "DO", "PPAEDA", "GEULSSI", 
                      "GONG" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

CompiladorLexer.EOF = antlr4.Token.EOF;
CompiladorLexer.T__0 = 1;
CompiladorLexer.T__1 = 2;
CompiladorLexer.T__2 = 3;
CompiladorLexer.T__3 = 4;
CompiladorLexer.T__4 = 5;
CompiladorLexer.CHICHAK = 6;
CompiladorLexer.PR = 7;
CompiladorLexer.GOPSSEM = 8;
CompiladorLexer.NANU = 9;
CompiladorLexer.DO = 10;
CompiladorLexer.PPAEDA = 11;
CompiladorLexer.GEULSSI = 12;
CompiladorLexer.GONG = 13;



