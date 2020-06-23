import java.applet.*;
import java.awt.*;

class AwtFonts extends Applet {
	
	Label label_italic, label_underline, label_bold;
	Font font_italic, font_bold, font_underline;
	
	public void init(){
		// Init Label
		label_italic = new Label("Left and Italic", Label.LEFT);
		label_underline = new Label("Center Underline", Label.CENTER);
		label_bold = new Label("Right Bold", Label.RIGHT);
		
		// 	Font(String name, int style, int size)
		font_italic = new Font("Serif", Font.ITALIC, 12);
		font_bold = new Font("Times New Roman", Font.BOLD, 20);
		
		// Special Case for underline
        Map<TextAttribute, Object> map = new HashMap<TextAttribute, Object>();
        map.put(TextAttribute.UNDERLINE, TextAttribute.UNDERLINE_LOW_ONE_PIXEL);
        font_underline = new Font(map);
		
		// Setting the font to labels
		label_italic.setFont(font_italic);
		label_underline.setFont(font_underline);
		label_bold.setFont(font_bold);	
		
		// Display onto Applet
		add(label_italic);
		add(label_underline);
		add(label_bold);
	}
	
	public void paint (Graphics g){
		// Labels are automatically added in init()
	}
}
