// Generated from ./grammar/MachaJaz.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MachaJazVisitor from './MachaJazVisitor.js';

const serializedATN = [4,1,27,174,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,1,0,4,0,32,8,0,11,0,12,0,33,1,1,1,1,1,1,1,1,1,1,1,2,
5,2,42,8,2,10,2,12,2,45,9,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,53,8,3,1,4,1,4,1,
4,1,4,3,4,59,8,4,1,4,1,4,1,4,1,4,3,4,65,8,4,3,4,67,8,4,1,5,1,5,1,5,1,5,1,
6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,87,8,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,100,8,7,10,7,12,7,103,9,7,1,8,1,
8,3,8,107,8,8,1,8,1,8,1,8,1,8,3,8,113,8,8,1,9,1,9,5,9,117,8,9,10,9,12,9,
120,9,9,1,9,3,9,123,8,9,1,10,1,10,1,10,1,10,1,10,1,10,5,10,131,8,10,10,10,
12,10,134,9,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,5,12,144,8,12,10,
12,12,12,147,9,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,5,13,157,8,13,
10,13,12,13,160,9,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
14,1,14,1,14,0,1,14,15,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,0,4,2,0,24,
24,26,26,1,0,19,21,2,0,7,8,12,12,1,0,9,10,183,0,31,1,0,0,0,2,35,1,0,0,0,
4,43,1,0,0,0,6,52,1,0,0,0,8,66,1,0,0,0,10,68,1,0,0,0,12,72,1,0,0,0,14,86,
1,0,0,0,16,104,1,0,0,0,18,114,1,0,0,0,20,124,1,0,0,0,22,137,1,0,0,0,24,140,
1,0,0,0,26,150,1,0,0,0,28,163,1,0,0,0,30,32,3,2,1,0,31,30,1,0,0,0,32,33,
1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,1,1,0,0,0,35,36,5,1,0,0,36,37,5,5,
0,0,37,38,3,4,2,0,38,39,5,6,0,0,39,3,1,0,0,0,40,42,3,6,3,0,41,40,1,0,0,0,
42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,5,1,0,0,0,45,43,1,0,0,0,46,
53,3,8,4,0,47,53,3,10,5,0,48,53,3,18,9,0,49,53,3,26,13,0,50,53,3,12,6,0,
51,53,3,16,8,0,52,46,1,0,0,0,52,47,1,0,0,0,52,48,1,0,0,0,52,49,1,0,0,0,52,
50,1,0,0,0,52,51,1,0,0,0,53,7,1,0,0,0,54,55,5,2,0,0,55,58,5,25,0,0,56,57,
5,11,0,0,57,59,3,14,7,0,58,56,1,0,0,0,58,59,1,0,0,0,59,67,1,0,0,0,60,61,
5,2,0,0,61,64,7,0,0,0,62,63,5,11,0,0,63,65,3,14,7,0,64,62,1,0,0,0,64,65,
1,0,0,0,65,67,1,0,0,0,66,54,1,0,0,0,66,60,1,0,0,0,67,9,1,0,0,0,68,69,5,25,
0,0,69,70,5,11,0,0,70,71,3,14,7,0,71,11,1,0,0,0,72,73,5,14,0,0,73,74,5,3,
0,0,74,75,3,14,7,0,75,76,5,4,0,0,76,13,1,0,0,0,77,78,6,7,-1,0,78,79,5,3,
0,0,79,80,3,14,7,0,80,81,5,4,0,0,81,87,1,0,0,0,82,87,7,1,0,0,83,87,5,25,
0,0,84,87,5,24,0,0,85,87,5,22,0,0,86,77,1,0,0,0,86,82,1,0,0,0,86,83,1,0,
0,0,86,84,1,0,0,0,86,85,1,0,0,0,87,101,1,0,0,0,88,89,10,8,0,0,89,90,7,2,
0,0,90,100,3,14,7,9,91,92,10,7,0,0,92,93,7,3,0,0,93,100,3,14,7,8,94,95,10,
5,0,0,95,96,7,1,0,0,96,100,3,14,7,6,97,98,10,1,0,0,98,100,3,14,7,2,99,88,
1,0,0,0,99,91,1,0,0,0,99,94,1,0,0,0,99,97,1,0,0,0,100,103,1,0,0,0,101,99,
1,0,0,0,101,102,1,0,0,0,102,15,1,0,0,0,103,101,1,0,0,0,104,106,5,25,0,0,
105,107,5,27,0,0,106,105,1,0,0,0,106,107,1,0,0,0,107,112,1,0,0,0,108,109,
5,9,0,0,109,113,5,9,0,0,110,111,5,10,0,0,111,113,5,10,0,0,112,108,1,0,0,
0,112,110,1,0,0,0,113,17,1,0,0,0,114,118,3,20,10,0,115,117,3,22,11,0,116,
115,1,0,0,0,117,120,1,0,0,0,118,116,1,0,0,0,118,119,1,0,0,0,119,122,1,0,
0,0,120,118,1,0,0,0,121,123,3,24,12,0,122,121,1,0,0,0,122,123,1,0,0,0,123,
19,1,0,0,0,124,125,5,15,0,0,125,126,5,3,0,0,126,127,3,14,7,0,127,128,5,4,
0,0,128,132,5,5,0,0,129,131,3,6,3,0,130,129,1,0,0,0,131,134,1,0,0,0,132,
130,1,0,0,0,132,133,1,0,0,0,133,135,1,0,0,0,134,132,1,0,0,0,135,136,5,6,
0,0,136,21,1,0,0,0,137,138,5,16,0,0,138,139,3,20,10,0,139,23,1,0,0,0,140,
141,5,16,0,0,141,145,5,5,0,0,142,144,3,6,3,0,143,142,1,0,0,0,144,147,1,0,
0,0,145,143,1,0,0,0,145,146,1,0,0,0,146,148,1,0,0,0,147,145,1,0,0,0,148,
149,5,6,0,0,149,25,1,0,0,0,150,151,5,18,0,0,151,152,5,3,0,0,152,153,3,14,
7,0,153,154,5,4,0,0,154,158,5,5,0,0,155,157,3,6,3,0,156,155,1,0,0,0,157,
160,1,0,0,0,158,156,1,0,0,0,158,159,1,0,0,0,159,161,1,0,0,0,160,158,1,0,
0,0,161,162,5,6,0,0,162,27,1,0,0,0,163,164,5,17,0,0,164,165,5,3,0,0,165,
166,3,8,4,0,166,167,3,14,7,0,167,168,3,16,8,0,168,169,5,4,0,0,169,170,5,
5,0,0,170,171,3,6,3,0,171,172,5,6,0,0,172,29,1,0,0,0,16,33,43,52,58,64,66,
86,99,101,106,112,118,122,132,145,158];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MachaJazParser extends antlr4.Parser {

    static grammarFileName = "MachaJaz.g4";
    static literalNames = [ null, "'chichak'", null, "'('", "')'", "'{'", 
                            "'}'", "'*'", "'/'", "'+'", "'-'", "'='", "'%'", 
                            "','", "'inswae'", "'myeon'", "'namochi'", "'wihan'", 
                            "'geuttae'" ];
    static symbolicNames = [ null, "CHICHAK", "PR", "PARENTH_A", "PARENTH_B", 
                             "OPENKEY", "CLOSEKEY", "GOPSSEM", "NANU", "DO", 
                             "PPAEDA", "EQUALS", "PORCENT", "COMA", "PRINT", 
                             "IF", "ELSE", "FOR", "WHILE", "LOGIC", "MATH", 
                             "BOOLEAN", "STRING", "CHAR", "SUJJA", "GEULSSI", 
                             "CHINCHA", "GONG" ];
    static ruleNames = [ "file", "start", "content", "main", "declaracion", 
                         "asignacion", "impresion", "expr", "incremento", 
                         "condicionalBucle", "condicional", "condicionalElseIf", 
                         "condicionalElse", "while", "for" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MachaJazParser.ruleNames;
        this.literalNames = MachaJazParser.literalNames;
        this.symbolicNames = MachaJazParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 7:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 8);
    		case 1:
    			return this.precpred(this._ctx, 7);
    		case 2:
    			return this.precpred(this._ctx, 5);
    		case 3:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MachaJazParser.RULE_file);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 30;
	            this.start();
	            this.state = 33; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MachaJazParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(MachaJazParser.CHICHAK);
	        this.state = 36;
	        this.match(MachaJazParser.OPENKEY);
	        this.state = 37;
	        this.content();
	        this.state = 38;
	        this.match(MachaJazParser.CLOSEKEY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	content() {
	    let localctx = new ContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MachaJazParser.RULE_content);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 33865732) !== 0)) {
	            this.state = 40;
	            this.main();
	            this.state = 45;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	main() {
	    let localctx = new MainContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MachaJazParser.RULE_main);
	    try {
	        this.state = 52;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 46;
	            this.declaracion();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 47;
	            this.asignacion();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 48;
	            this.condicionalBucle();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 49;
	            this.while_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 50;
	            this.impresion();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 51;
	            this.incremento();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MachaJazParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.state = 66;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ValidAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.match(MachaJazParser.PR);
	            this.state = 55;
	            this.match(MachaJazParser.GEULSSI);
	            this.state = 58;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===11) {
	                this.state = 56;
	                this.match(MachaJazParser.EQUALS);
	                this.state = 57;
	                this.expr(0);
	            }

	            break;

	        case 2:
	            localctx = new InvalidAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 60;
	            this.match(MachaJazParser.PR);
	            this.state = 61;
	            localctx.ID = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===24 || _la===26)) {
	                localctx.ID = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===11) {
	                this.state = 62;
	                this.match(MachaJazParser.EQUALS);
	                this.state = 63;
	                this.expr(0);
	            }

	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MachaJazParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(MachaJazParser.GEULSSI);
	        this.state = 69;
	        this.match(MachaJazParser.EQUALS);
	        this.state = 70;
	        this.expr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MachaJazParser.RULE_impresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(MachaJazParser.PRINT);
	        this.state = 73;
	        this.match(MachaJazParser.PARENTH_A);
	        this.state = 74;
	        this.expr(0);
	        this.state = 75;
	        this.match(MachaJazParser.PARENTH_B);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, MachaJazParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 78;
	            this.match(MachaJazParser.PARENTH_A);
	            this.state = 79;
	            this.expr(0);
	            this.state = 80;
	            this.match(MachaJazParser.PARENTH_B);
	            break;
	        case 19:
	        case 20:
	        case 21:
	            localctx = new CondicionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 82;
	            localctx.simbolo = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3670016) !== 0))) {
	                localctx.simbolo = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 25:
	            localctx = new GeulssiContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 83;
	            this.match(MachaJazParser.GEULSSI);
	            break;
	        case 24:
	            localctx = new SujjaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 84;
	            this.match(MachaJazParser.SUJJA);
	            break;
	        case 22:
	            localctx = new StringContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 85;
	            this.match(MachaJazParser.STRING);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 101;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 99;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MuldivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MachaJazParser.RULE_expr);
	                    this.state = 88;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 89;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4480) !== 0))) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 90;
	                    this.expr(9);
	                    break;

	                case 2:
	                    localctx = new SumresContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MachaJazParser.RULE_expr);
	                    this.state = 91;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 92;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===10)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 93;
	                    this.expr(8);
	                    break;

	                case 3:
	                    localctx = new CondicionContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MachaJazParser.RULE_expr);
	                    this.state = 94;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 95;
	                    localctx.simbolo = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3670016) !== 0))) {
	                        localctx.simbolo = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 96;
	                    this.expr(6);
	                    break;

	                case 4:
	                    localctx = new ImplicitMultContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MachaJazParser.RULE_expr);
	                    this.state = 97;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 98;
	                    this.expr(2);
	                    break;

	                } 
	            }
	            this.state = 103;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	incremento() {
	    let localctx = new IncrementoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MachaJazParser.RULE_incremento);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(MachaJazParser.GEULSSI);
	        this.state = 106;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 105;
	            this.match(MachaJazParser.GONG);
	        }

	        this.state = 112;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.state = 108;
	            this.match(MachaJazParser.DO);
	            this.state = 109;
	            this.match(MachaJazParser.DO);
	            break;
	        case 10:
	            this.state = 110;
	            this.match(MachaJazParser.PPAEDA);
	            this.state = 111;
	            this.match(MachaJazParser.PPAEDA);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicionalBucle() {
	    let localctx = new CondicionalBucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MachaJazParser.RULE_condicionalBucle);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.condicional();
	        this.state = 118;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 115;
	                this.condicionalElseIf(); 
	            }
	            this.state = 120;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	        this.state = 122;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 121;
	            this.condicionalElse();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicional() {
	    let localctx = new CondicionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MachaJazParser.RULE_condicional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.match(MachaJazParser.IF);
	        this.state = 125;
	        this.match(MachaJazParser.PARENTH_A);
	        this.state = 126;
	        this.expr(0);
	        this.state = 127;
	        this.match(MachaJazParser.PARENTH_B);
	        this.state = 128;
	        this.match(MachaJazParser.OPENKEY);
	        this.state = 132;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 33865732) !== 0)) {
	            this.state = 129;
	            this.main();
	            this.state = 134;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 135;
	        this.match(MachaJazParser.CLOSEKEY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicionalElseIf() {
	    let localctx = new CondicionalElseIfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MachaJazParser.RULE_condicionalElseIf);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.match(MachaJazParser.ELSE);
	        this.state = 138;
	        this.condicional();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicionalElse() {
	    let localctx = new CondicionalElseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, MachaJazParser.RULE_condicionalElse);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.match(MachaJazParser.ELSE);
	        this.state = 141;
	        this.match(MachaJazParser.OPENKEY);
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 33865732) !== 0)) {
	            this.state = 142;
	            this.main();
	            this.state = 147;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 148;
	        this.match(MachaJazParser.CLOSEKEY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	while_() {
	    let localctx = new WhileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, MachaJazParser.RULE_while);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this.match(MachaJazParser.WHILE);
	        this.state = 151;
	        this.match(MachaJazParser.PARENTH_A);
	        this.state = 152;
	        this.expr(0);
	        this.state = 153;
	        this.match(MachaJazParser.PARENTH_B);
	        this.state = 154;
	        this.match(MachaJazParser.OPENKEY);
	        this.state = 158;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 33865732) !== 0)) {
	            this.state = 155;
	            this.main();
	            this.state = 160;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 161;
	        this.match(MachaJazParser.CLOSEKEY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	for_() {
	    let localctx = new ForContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, MachaJazParser.RULE_for);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.match(MachaJazParser.FOR);
	        this.state = 164;
	        this.match(MachaJazParser.PARENTH_A);
	        this.state = 165;
	        this.declaracion();
	        this.state = 166;
	        this.expr(0);
	        this.state = 167;
	        this.incremento();
	        this.state = 168;
	        this.match(MachaJazParser.PARENTH_B);
	        this.state = 169;
	        this.match(MachaJazParser.OPENKEY);
	        this.state = 170;
	        this.main();
	        this.state = 171;
	        this.match(MachaJazParser.CLOSEKEY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MachaJazParser.EOF = antlr4.Token.EOF;
MachaJazParser.CHICHAK = 1;
MachaJazParser.PR = 2;
MachaJazParser.PARENTH_A = 3;
MachaJazParser.PARENTH_B = 4;
MachaJazParser.OPENKEY = 5;
MachaJazParser.CLOSEKEY = 6;
MachaJazParser.GOPSSEM = 7;
MachaJazParser.NANU = 8;
MachaJazParser.DO = 9;
MachaJazParser.PPAEDA = 10;
MachaJazParser.EQUALS = 11;
MachaJazParser.PORCENT = 12;
MachaJazParser.COMA = 13;
MachaJazParser.PRINT = 14;
MachaJazParser.IF = 15;
MachaJazParser.ELSE = 16;
MachaJazParser.FOR = 17;
MachaJazParser.WHILE = 18;
MachaJazParser.LOGIC = 19;
MachaJazParser.MATH = 20;
MachaJazParser.BOOLEAN = 21;
MachaJazParser.STRING = 22;
MachaJazParser.CHAR = 23;
MachaJazParser.SUJJA = 24;
MachaJazParser.GEULSSI = 25;
MachaJazParser.CHINCHA = 26;
MachaJazParser.GONG = 27;

MachaJazParser.RULE_file = 0;
MachaJazParser.RULE_start = 1;
MachaJazParser.RULE_content = 2;
MachaJazParser.RULE_main = 3;
MachaJazParser.RULE_declaracion = 4;
MachaJazParser.RULE_asignacion = 5;
MachaJazParser.RULE_impresion = 6;
MachaJazParser.RULE_expr = 7;
MachaJazParser.RULE_incremento = 8;
MachaJazParser.RULE_condicionalBucle = 9;
MachaJazParser.RULE_condicional = 10;
MachaJazParser.RULE_condicionalElseIf = 11;
MachaJazParser.RULE_condicionalElse = 12;
MachaJazParser.RULE_while = 13;
MachaJazParser.RULE_for = 14;

class FileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MachaJazParser.RULE_file;
    }

	start = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StartContext);
	    } else {
	        return this.getTypedRuleContext(StartContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof MachaJazVisitor ) {
	        return visitor.visitFile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MachaJazParser.RULE_start;
    }

	CHICHAK() {
	    return this.getToken(MachaJazParser.CHICHAK, 0);
	};

	OPENKEY() {
	    return this.getToken(MachaJazParser.OPENKEY, 0);
	};

	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	CLOSEKEY() {
	    return this.getToken(MachaJazParser.CLOSEKEY, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaJazVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MachaJazParser.RULE_content;
    }

	main = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MainContext);
	    } else {
	        return this.getTypedRuleContext(MainContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof MachaJazVisitor ) {
	        return visitor.visitContent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MainContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MachaJazParser.RULE_main;
    }

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	condicionalBucle() {
	    return this.getTypedRuleContext(CondicionalBucleContext,0);
	};

	while_() {
	    return this.getTypedRuleContext(WhileContext,0);
	};

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	incremento() {
	    return this.getTypedRuleContext(IncrementoContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaJazVisitor ) {
	        return visitor.visitMain(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MachaJazParser.RULE_declaracion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ValidAssignContext extends DeclaracionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PR() {
	    return this.getToken(MachaJazParser.PR, 0);
	};

	GEULSSI() {
	    return this.getToken(MachaJazParser.GEULSSI, 0);
	};

	EQUALS() {
	    return this.getToken(MachaJazParser.EQUALS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaJazVisitor ) {
	        return visitor.visitValidAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MachaJazParser.ValidAssignContext = ValidAssignContext;

class InvalidAssignContext extends DeclaracionContext {

    constructor(parser, ctx) {
        super(parser);
        this.ID = null;;
        super.copyFrom(ctx);
    }

	PR() {
	    return this.getToken(MachaJazParser.PR, 0);
	};

	CHINCHA() {
	    return this.getToken(MachaJazParser.CHINCHA, 0);
	};

	SUJJA() {
	    return this.getToken(MachaJazParser.SUJJA, 0);
	};

	EQUALS() {
	    return this.getToken(MachaJazParser.EQUALS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaJazVisitor ) {
	        return visitor.visitInvalidAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MachaJazParser.InvalidAssignContext = InvalidAssignContext;

class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MachaJazParser.RULE_asignacion;
    }

	GEULSSI() {
	    return this.getToken(MachaJazParser.GEULSSI, 0);
	};

	EQUALS() {
	    return this.getToken(MachaJazParser.EQUALS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaJazVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MachaJazParser.RULE_impresion;
    }

	PRINT() {
	    return this.getToken(MachaJazParser.PRINT, 0);
	};

	PARENTH_A() {
	    return this.getToken(MachaJazParser.PARENTH_A, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	PARENTH_B() {
	    return this.getToken(MachaJazParser.PARENTH_B, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaJazVisitor ) {
	        return visitor.visitImpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MachaJazParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParentesisContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PARENTH_A() {
	    return this.getToken(MachaJazParser.PARENTH_A, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	PARENTH_B() {
	    return this.getToken(MachaJazParser.PARENTH_B, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaJazVisitor ) {
	        return visitor.visitParentesis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MachaJazParser.ParentesisContext = ParentesisContext;

class ImplicitMultContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof MachaJazVisitor ) {
	        return visitor.visitImplicitMult(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MachaJazParser.ImplicitMultContext = ImplicitMultContext;

class SujjaContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SUJJA() {
	    return this.getToken(MachaJazParser.SUJJA, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaJazVisitor ) {
	        return visitor.visitSujja(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MachaJazParser.SujjaContext = SujjaContext;

class StringContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(MachaJazParser.STRING, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaJazVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MachaJazParser.StringContext = StringContext;

class SumresContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.operation = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	DO() {
	    return this.getToken(MachaJazParser.DO, 0);
	};

	PPAEDA() {
	    return this.getToken(MachaJazParser.PPAEDA, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaJazVisitor ) {
	        return visitor.visitSumres(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MachaJazParser.SumresContext = SumresContext;

class GeulssiContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	GEULSSI() {
	    return this.getToken(MachaJazParser.GEULSSI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaJazVisitor ) {
	        return visitor.visitGeulssi(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MachaJazParser.GeulssiContext = GeulssiContext;

class CondicionContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.simbolo = null;;
        super.copyFrom(ctx);
    }

	LOGIC() {
	    return this.getToken(MachaJazParser.LOGIC, 0);
	};

	MATH() {
	    return this.getToken(MachaJazParser.MATH, 0);
	};

	BOOLEAN() {
	    return this.getToken(MachaJazParser.BOOLEAN, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof MachaJazVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MachaJazParser.CondicionContext = CondicionContext;

class MuldivContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.operation = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	GOPSSEM() {
	    return this.getToken(MachaJazParser.GOPSSEM, 0);
	};

	NANU() {
	    return this.getToken(MachaJazParser.NANU, 0);
	};

	PORCENT() {
	    return this.getToken(MachaJazParser.PORCENT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaJazVisitor ) {
	        return visitor.visitMuldiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MachaJazParser.MuldivContext = MuldivContext;

class IncrementoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MachaJazParser.RULE_incremento;
    }

	GEULSSI() {
	    return this.getToken(MachaJazParser.GEULSSI, 0);
	};

	DO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MachaJazParser.DO);
	    } else {
	        return this.getToken(MachaJazParser.DO, i);
	    }
	};


	PPAEDA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MachaJazParser.PPAEDA);
	    } else {
	        return this.getToken(MachaJazParser.PPAEDA, i);
	    }
	};


	GONG() {
	    return this.getToken(MachaJazParser.GONG, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaJazVisitor ) {
	        return visitor.visitIncremento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionalBucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MachaJazParser.RULE_condicionalBucle;
    }

	condicional() {
	    return this.getTypedRuleContext(CondicionalContext,0);
	};

	condicionalElseIf = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CondicionalElseIfContext);
	    } else {
	        return this.getTypedRuleContext(CondicionalElseIfContext,i);
	    }
	};

	condicionalElse() {
	    return this.getTypedRuleContext(CondicionalElseContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaJazVisitor ) {
	        return visitor.visitCondicionalBucle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MachaJazParser.RULE_condicional;
    }

	IF() {
	    return this.getToken(MachaJazParser.IF, 0);
	};

	PARENTH_A() {
	    return this.getToken(MachaJazParser.PARENTH_A, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	PARENTH_B() {
	    return this.getToken(MachaJazParser.PARENTH_B, 0);
	};

	OPENKEY() {
	    return this.getToken(MachaJazParser.OPENKEY, 0);
	};

	CLOSEKEY() {
	    return this.getToken(MachaJazParser.CLOSEKEY, 0);
	};

	main = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MainContext);
	    } else {
	        return this.getTypedRuleContext(MainContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof MachaJazVisitor ) {
	        return visitor.visitCondicional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionalElseIfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MachaJazParser.RULE_condicionalElseIf;
    }

	ELSE() {
	    return this.getToken(MachaJazParser.ELSE, 0);
	};

	condicional() {
	    return this.getTypedRuleContext(CondicionalContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaJazVisitor ) {
	        return visitor.visitCondicionalElseIf(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionalElseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MachaJazParser.RULE_condicionalElse;
    }

	ELSE() {
	    return this.getToken(MachaJazParser.ELSE, 0);
	};

	OPENKEY() {
	    return this.getToken(MachaJazParser.OPENKEY, 0);
	};

	CLOSEKEY() {
	    return this.getToken(MachaJazParser.CLOSEKEY, 0);
	};

	main = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MainContext);
	    } else {
	        return this.getTypedRuleContext(MainContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof MachaJazVisitor ) {
	        return visitor.visitCondicionalElse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WhileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MachaJazParser.RULE_while;
    }

	WHILE() {
	    return this.getToken(MachaJazParser.WHILE, 0);
	};

	PARENTH_A() {
	    return this.getToken(MachaJazParser.PARENTH_A, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	PARENTH_B() {
	    return this.getToken(MachaJazParser.PARENTH_B, 0);
	};

	OPENKEY() {
	    return this.getToken(MachaJazParser.OPENKEY, 0);
	};

	CLOSEKEY() {
	    return this.getToken(MachaJazParser.CLOSEKEY, 0);
	};

	main = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MainContext);
	    } else {
	        return this.getTypedRuleContext(MainContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof MachaJazVisitor ) {
	        return visitor.visitWhile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ForContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MachaJazParser.RULE_for;
    }

	FOR() {
	    return this.getToken(MachaJazParser.FOR, 0);
	};

	PARENTH_A() {
	    return this.getToken(MachaJazParser.PARENTH_A, 0);
	};

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	incremento() {
	    return this.getTypedRuleContext(IncrementoContext,0);
	};

	PARENTH_B() {
	    return this.getToken(MachaJazParser.PARENTH_B, 0);
	};

	OPENKEY() {
	    return this.getToken(MachaJazParser.OPENKEY, 0);
	};

	main() {
	    return this.getTypedRuleContext(MainContext,0);
	};

	CLOSEKEY() {
	    return this.getToken(MachaJazParser.CLOSEKEY, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaJazVisitor ) {
	        return visitor.visitFor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MachaJazParser.FileContext = FileContext; 
MachaJazParser.StartContext = StartContext; 
MachaJazParser.ContentContext = ContentContext; 
MachaJazParser.MainContext = MainContext; 
MachaJazParser.DeclaracionContext = DeclaracionContext; 
MachaJazParser.AsignacionContext = AsignacionContext; 
MachaJazParser.ImpresionContext = ImpresionContext; 
MachaJazParser.ExprContext = ExprContext; 
MachaJazParser.IncrementoContext = IncrementoContext; 
MachaJazParser.CondicionalBucleContext = CondicionalBucleContext; 
MachaJazParser.CondicionalContext = CondicionalContext; 
MachaJazParser.CondicionalElseIfContext = CondicionalElseIfContext; 
MachaJazParser.CondicionalElseContext = CondicionalElseContext; 
MachaJazParser.WhileContext = WhileContext; 
MachaJazParser.ForContext = ForContext; 
