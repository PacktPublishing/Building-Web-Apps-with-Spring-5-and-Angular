    /**
     * In this class, the Shape is passed as parameter to DrawWithIOC   
     * constructor. 
     * draw method on a DrawWithIOC object just invokes the draw method  
     * on Shape object. 
     * It, no longer, manage the creation of Shape object based on 
     * shapeType and there upon, invoke the draw method.
     **/

    public class DrawWithIOC {
      Logger logger = Logger.getLogger(DrawWithIOC.class.getName());
 
      private Shape shape;
 
      public DrawWithIOC(Shape shape) {
        this.shape = shape;
      }

      public void draw() { 
        this.shape.draw(); 
      } 
 
      public static void main(String[] args) {
        Shape shape = new Rectangle();
        DrawWithIOC drawWithIOC = new DrawWithIOC(shape);
        drawWithIOC.draw();
      }
    }