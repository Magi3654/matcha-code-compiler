// Generated from /home/mrsmin/Escritorio/automatas/automatas 2/macha-code-compiler/grammar/translate/MachaC.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class MachaCLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		PR=1, PARENTH_A=2, PARENTH_B=3, OPENKEY=4, CLOSEKEY=5, EQUALS=6, SUMARIZER=7, 
		MULTI=8, DIV=9, SUM=10, MIN=11, DOUBLE_QUOTE=12, SEMICOLON=13, PORCENT=14, 
		IF=15, ELSE=16, FOR=17, WHILE=18, LOGIC=19, BOOLEAN=20, MATH=21, PRINT=22, 
		MAIN=23, CHAR=24, INT=25, FLOAT=26, STRING=27, ID=28, INVID=29, WS=30;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"PR", "PARENTH_A", "PARENTH_B", "OPENKEY", "CLOSEKEY", "EQUALS", "SUMARIZER", 
			"MULTI", "DIV", "SUM", "MIN", "DOUBLE_QUOTE", "SEMICOLON", "PORCENT", 
			"IF", "ELSE", "FOR", "WHILE", "LOGIC", "BOOLEAN", "MATH", "PRINT", "MAIN", 
			"CHAR", "INT", "FLOAT", "STRING", "ID", "INVID", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'('", "')'", "'{'", "'}'", "'='", null, "'*'", "'/'", "'+'", 
			"'-'", "'\"'", "';'", "'%'", "'if'", "'else'", "'for'", "'while'", null, 
			null, null, "'printf'", "'void main'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PR", "PARENTH_A", "PARENTH_B", "OPENKEY", "CLOSEKEY", "EQUALS", 
			"SUMARIZER", "MULTI", "DIV", "SUM", "MIN", "DOUBLE_QUOTE", "SEMICOLON", 
			"PORCENT", "IF", "ELSE", "FOR", "WHILE", "LOGIC", "BOOLEAN", "MATH", 
			"PRINT", "MAIN", "CHAR", "INT", "FLOAT", "STRING", "ID", "INVID", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public MachaCLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "MachaC.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u001e\u00e0\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0002\u0018\u0007\u0018\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a"+
		"\u0002\u001b\u0007\u001b\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0003\u0000J\b\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006`\b\u0006"+
		"\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001"+
		"\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011"+
		"\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0012"+
		"\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012"+
		"\u0003\u0012\u0089\b\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0003\u0013"+
		"\u0094\b\u0013\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014"+
		"\u0001\u0014\u0001\u0014\u0003\u0014\u009d\b\u0014\u0001\u0015\u0001\u0015"+
		"\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0016"+
		"\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016"+
		"\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0017\u0001\u0017\u0001\u0017"+
		"\u0001\u0017\u0001\u0018\u0004\u0018\u00b5\b\u0018\u000b\u0018\f\u0018"+
		"\u00b6\u0001\u0019\u0004\u0019\u00ba\b\u0019\u000b\u0019\f\u0019\u00bb"+
		"\u0001\u0019\u0001\u0019\u0004\u0019\u00c0\b\u0019\u000b\u0019\f\u0019"+
		"\u00c1\u0001\u001a\u0001\u001a\u0005\u001a\u00c6\b\u001a\n\u001a\f\u001a"+
		"\u00c9\t\u001a\u0001\u001a\u0001\u001a\u0001\u001b\u0001\u001b\u0004\u001b"+
		"\u00cf\b\u001b\u000b\u001b\f\u001b\u00d0\u0003\u001b\u00d3\b\u001b\u0001"+
		"\u001c\u0004\u001c\u00d6\b\u001c\u000b\u001c\f\u001c\u00d7\u0001\u001d"+
		"\u0004\u001d\u00db\b\u001d\u000b\u001d\f\u001d\u00dc\u0001\u001d\u0001"+
		"\u001d\u0001\u00c7\u0000\u001e\u0001\u0001\u0003\u0002\u0005\u0003\u0007"+
		"\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b"+
		"\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013"+
		"\'\u0014)\u0015+\u0016-\u0017/\u00181\u00193\u001a5\u001b7\u001c9\u001d"+
		";\u001e\u0001\u0000\u0007\u0002\u0000<<>>\u0002\u0000AZaz\u0001\u0000"+
		"09\u0001\u0000..\u0004\u000009AZ__az\u0003\u000009AZaz\u0003\u0000\t\n"+
		"\r\r  \u00f4\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000"+
		"\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000"+
		"\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000"+
		"\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000"+
		"\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000"+
		"\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000"+
		"\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000"+
		"\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000"+
		"\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000%"+
		"\u0001\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000\u0000\u0000)\u0001"+
		"\u0000\u0000\u0000\u0000+\u0001\u0000\u0000\u0000\u0000-\u0001\u0000\u0000"+
		"\u0000\u0000/\u0001\u0000\u0000\u0000\u00001\u0001\u0000\u0000\u0000\u0000"+
		"3\u0001\u0000\u0000\u0000\u00005\u0001\u0000\u0000\u0000\u00007\u0001"+
		"\u0000\u0000\u0000\u00009\u0001\u0000\u0000\u0000\u0000;\u0001\u0000\u0000"+
		"\u0000\u0001I\u0001\u0000\u0000\u0000\u0003K\u0001\u0000\u0000\u0000\u0005"+
		"M\u0001\u0000\u0000\u0000\u0007O\u0001\u0000\u0000\u0000\tQ\u0001\u0000"+
		"\u0000\u0000\u000bS\u0001\u0000\u0000\u0000\r_\u0001\u0000\u0000\u0000"+
		"\u000fa\u0001\u0000\u0000\u0000\u0011c\u0001\u0000\u0000\u0000\u0013e"+
		"\u0001\u0000\u0000\u0000\u0015g\u0001\u0000\u0000\u0000\u0017i\u0001\u0000"+
		"\u0000\u0000\u0019k\u0001\u0000\u0000\u0000\u001bm\u0001\u0000\u0000\u0000"+
		"\u001do\u0001\u0000\u0000\u0000\u001fr\u0001\u0000\u0000\u0000!w\u0001"+
		"\u0000\u0000\u0000#{\u0001\u0000\u0000\u0000%\u0088\u0001\u0000\u0000"+
		"\u0000\'\u0093\u0001\u0000\u0000\u0000)\u009c\u0001\u0000\u0000\u0000"+
		"+\u009e\u0001\u0000\u0000\u0000-\u00a5\u0001\u0000\u0000\u0000/\u00af"+
		"\u0001\u0000\u0000\u00001\u00b4\u0001\u0000\u0000\u00003\u00b9\u0001\u0000"+
		"\u0000\u00005\u00c3\u0001\u0000\u0000\u00007\u00cc\u0001\u0000\u0000\u0000"+
		"9\u00d5\u0001\u0000\u0000\u0000;\u00da\u0001\u0000\u0000\u0000=>\u0005"+
		"i\u0000\u0000>?\u0005n\u0000\u0000?J\u0005t\u0000\u0000@A\u0005f\u0000"+
		"\u0000AB\u0005l\u0000\u0000BC\u0005o\u0000\u0000CD\u0005a\u0000\u0000"+
		"DJ\u0005t\u0000\u0000EF\u0005c\u0000\u0000FG\u0005h\u0000\u0000GH\u0005"+
		"a\u0000\u0000HJ\u0005r\u0000\u0000I=\u0001\u0000\u0000\u0000I@\u0001\u0000"+
		"\u0000\u0000IE\u0001\u0000\u0000\u0000J\u0002\u0001\u0000\u0000\u0000"+
		"KL\u0005(\u0000\u0000L\u0004\u0001\u0000\u0000\u0000MN\u0005)\u0000\u0000"+
		"N\u0006\u0001\u0000\u0000\u0000OP\u0005{\u0000\u0000P\b\u0001\u0000\u0000"+
		"\u0000QR\u0005}\u0000\u0000R\n\u0001\u0000\u0000\u0000ST\u0005=\u0000"+
		"\u0000T\f\u0001\u0000\u0000\u0000UV\u0005+\u0000\u0000V`\u0005=\u0000"+
		"\u0000WX\u0005-\u0000\u0000X`\u0005=\u0000\u0000YZ\u0005*\u0000\u0000"+
		"Z`\u0005=\u0000\u0000[\\\u0005/\u0000\u0000\\`\u0005=\u0000\u0000]^\u0005"+
		"%\u0000\u0000^`\u0005=\u0000\u0000_U\u0001\u0000\u0000\u0000_W\u0001\u0000"+
		"\u0000\u0000_Y\u0001\u0000\u0000\u0000_[\u0001\u0000\u0000\u0000_]\u0001"+
		"\u0000\u0000\u0000`\u000e\u0001\u0000\u0000\u0000ab\u0005*\u0000\u0000"+
		"b\u0010\u0001\u0000\u0000\u0000cd\u0005/\u0000\u0000d\u0012\u0001\u0000"+
		"\u0000\u0000ef\u0005+\u0000\u0000f\u0014\u0001\u0000\u0000\u0000gh\u0005"+
		"-\u0000\u0000h\u0016\u0001\u0000\u0000\u0000ij\u0005\"\u0000\u0000j\u0018"+
		"\u0001\u0000\u0000\u0000kl\u0005;\u0000\u0000l\u001a\u0001\u0000\u0000"+
		"\u0000mn\u0005%\u0000\u0000n\u001c\u0001\u0000\u0000\u0000op\u0005i\u0000"+
		"\u0000pq\u0005f\u0000\u0000q\u001e\u0001\u0000\u0000\u0000rs\u0005e\u0000"+
		"\u0000st\u0005l\u0000\u0000tu\u0005s\u0000\u0000uv\u0005e\u0000\u0000"+
		"v \u0001\u0000\u0000\u0000wx\u0005f\u0000\u0000xy\u0005o\u0000\u0000y"+
		"z\u0005r\u0000\u0000z\"\u0001\u0000\u0000\u0000{|\u0005w\u0000\u0000|"+
		"}\u0005h\u0000\u0000}~\u0005i\u0000\u0000~\u007f\u0005l\u0000\u0000\u007f"+
		"\u0080\u0005e\u0000\u0000\u0080$\u0001\u0000\u0000\u0000\u0081\u0082\u0005"+
		"|\u0000\u0000\u0082\u0089\u0005|\u0000\u0000\u0083\u0084\u0005&\u0000"+
		"\u0000\u0084\u0089\u0005&\u0000\u0000\u0085\u0086\u0005=\u0000\u0000\u0086"+
		"\u0089\u0005=\u0000\u0000\u0087\u0089\u0005%\u0000\u0000\u0088\u0081\u0001"+
		"\u0000\u0000\u0000\u0088\u0083\u0001\u0000\u0000\u0000\u0088\u0085\u0001"+
		"\u0000\u0000\u0000\u0088\u0087\u0001\u0000\u0000\u0000\u0089&\u0001\u0000"+
		"\u0000\u0000\u008a\u008b\u0005t\u0000\u0000\u008b\u008c\u0005r\u0000\u0000"+
		"\u008c\u008d\u0005u\u0000\u0000\u008d\u0094\u0005e\u0000\u0000\u008e\u008f"+
		"\u0005f\u0000\u0000\u008f\u0090\u0005a\u0000\u0000\u0090\u0091\u0005l"+
		"\u0000\u0000\u0091\u0092\u0005s\u0000\u0000\u0092\u0094\u0005e\u0000\u0000"+
		"\u0093\u008a\u0001\u0000\u0000\u0000\u0093\u008e\u0001\u0000\u0000\u0000"+
		"\u0094(\u0001\u0000\u0000\u0000\u0095\u009d\u0007\u0000\u0000\u0000\u0096"+
		"\u0097\u0005<\u0000\u0000\u0097\u009d\u0005=\u0000\u0000\u0098\u0099\u0005"+
		">\u0000\u0000\u0099\u009d\u0005=\u0000\u0000\u009a\u009b\u0005!\u0000"+
		"\u0000\u009b\u009d\u0005=\u0000\u0000\u009c\u0095\u0001\u0000\u0000\u0000"+
		"\u009c\u0096\u0001\u0000\u0000\u0000\u009c\u0098\u0001\u0000\u0000\u0000"+
		"\u009c\u009a\u0001\u0000\u0000\u0000\u009d*\u0001\u0000\u0000\u0000\u009e"+
		"\u009f\u0005p\u0000\u0000\u009f\u00a0\u0005r\u0000\u0000\u00a0\u00a1\u0005"+
		"i\u0000\u0000\u00a1\u00a2\u0005n\u0000\u0000\u00a2\u00a3\u0005t\u0000"+
		"\u0000\u00a3\u00a4\u0005f\u0000\u0000\u00a4,\u0001\u0000\u0000\u0000\u00a5"+
		"\u00a6\u0005v\u0000\u0000\u00a6\u00a7\u0005o\u0000\u0000\u00a7\u00a8\u0005"+
		"i\u0000\u0000\u00a8\u00a9\u0005d\u0000\u0000\u00a9\u00aa\u0005 \u0000"+
		"\u0000\u00aa\u00ab\u0005m\u0000\u0000\u00ab\u00ac\u0005a\u0000\u0000\u00ac"+
		"\u00ad\u0005i\u0000\u0000\u00ad\u00ae\u0005n\u0000\u0000\u00ae.\u0001"+
		"\u0000\u0000\u0000\u00af\u00b0\u0005\"\u0000\u0000\u00b0\u00b1\u0007\u0001"+
		"\u0000\u0000\u00b1\u00b2\u0005\"\u0000\u0000\u00b20\u0001\u0000\u0000"+
		"\u0000\u00b3\u00b5\u0007\u0002\u0000\u0000\u00b4\u00b3\u0001\u0000\u0000"+
		"\u0000\u00b5\u00b6\u0001\u0000\u0000\u0000\u00b6\u00b4\u0001\u0000\u0000"+
		"\u0000\u00b6\u00b7\u0001\u0000\u0000\u0000\u00b72\u0001\u0000\u0000\u0000"+
		"\u00b8\u00ba\u0007\u0002\u0000\u0000\u00b9\u00b8\u0001\u0000\u0000\u0000"+
		"\u00ba\u00bb\u0001\u0000\u0000\u0000\u00bb\u00b9\u0001\u0000\u0000\u0000"+
		"\u00bb\u00bc\u0001\u0000\u0000\u0000\u00bc\u00bd\u0001\u0000\u0000\u0000"+
		"\u00bd\u00bf\u0007\u0003\u0000\u0000\u00be\u00c0\u0007\u0002\u0000\u0000"+
		"\u00bf\u00be\u0001\u0000\u0000\u0000\u00c0\u00c1\u0001\u0000\u0000\u0000"+
		"\u00c1\u00bf\u0001\u0000\u0000\u0000\u00c1\u00c2\u0001\u0000\u0000\u0000"+
		"\u00c24\u0001\u0000\u0000\u0000\u00c3\u00c7\u0005\"\u0000\u0000\u00c4"+
		"\u00c6\t\u0000\u0000\u0000\u00c5\u00c4\u0001\u0000\u0000\u0000\u00c6\u00c9"+
		"\u0001\u0000\u0000\u0000\u00c7\u00c8\u0001\u0000\u0000\u0000\u00c7\u00c5"+
		"\u0001\u0000\u0000\u0000\u00c8\u00ca\u0001\u0000\u0000\u0000\u00c9\u00c7"+
		"\u0001\u0000\u0000\u0000\u00ca\u00cb\u0005\"\u0000\u0000\u00cb6\u0001"+
		"\u0000\u0000\u0000\u00cc\u00d2\u0007\u0001\u0000\u0000\u00cd\u00cf\u0007"+
		"\u0004\u0000\u0000\u00ce\u00cd\u0001\u0000\u0000\u0000\u00cf\u00d0\u0001"+
		"\u0000\u0000\u0000\u00d0\u00ce\u0001\u0000\u0000\u0000\u00d0\u00d1\u0001"+
		"\u0000\u0000\u0000\u00d1\u00d3\u0001\u0000\u0000\u0000\u00d2\u00ce\u0001"+
		"\u0000\u0000\u0000\u00d2\u00d3\u0001\u0000\u0000\u0000\u00d38\u0001\u0000"+
		"\u0000\u0000\u00d4\u00d6\u0007\u0005\u0000\u0000\u00d5\u00d4\u0001\u0000"+
		"\u0000\u0000\u00d6\u00d7\u0001\u0000\u0000\u0000\u00d7\u00d5\u0001\u0000"+
		"\u0000\u0000\u00d7\u00d8\u0001\u0000\u0000\u0000\u00d8:\u0001\u0000\u0000"+
		"\u0000\u00d9\u00db\u0007\u0006\u0000\u0000\u00da\u00d9\u0001\u0000\u0000"+
		"\u0000\u00db\u00dc\u0001\u0000\u0000\u0000\u00dc\u00da\u0001\u0000\u0000"+
		"\u0000\u00dc\u00dd\u0001\u0000\u0000\u0000\u00dd\u00de\u0001\u0000\u0000"+
		"\u0000\u00de\u00df\u0006\u001d\u0000\u0000\u00df<\u0001\u0000\u0000\u0000"+
		"\u000e\u0000I_\u0088\u0093\u009c\u00b6\u00bb\u00c1\u00c7\u00d0\u00d2\u00d7"+
		"\u00dc\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}