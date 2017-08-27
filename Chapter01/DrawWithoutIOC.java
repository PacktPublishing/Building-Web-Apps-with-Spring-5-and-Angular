    /*
     * This class demonstrates the dependency of higher-level object   
     * (DrawWithoutIOC)
     * onto lower level objects such as Rectangle, Square which are 
     * created within 
     * Shape class based on the value of shapeType which is passed as a 
     * method 
     * parameter to draw method.
     */

    public class DrawWithoutIOC {
 
      Logger logger = Logger.getLogger(DrawWithoutIOC.class.getName());

      public void draw(String shapeType) {
        Shape shape = new Shape();
        try {
          shape.draw(shapeType);
        } 
        catch (UndefinedShapeException e) {
          logger.log(Level.INFO, e.getMessage(), e);
        }
      }
    /*
     * Note that Shape class creates instances of Rectangle or Square   
       class
     * based on the value of shapeType. Any new value that needs to be   
       supported requires change in the draw method of Shape class.
     */
 
      private class Shape {
        public void draw(String shapeType) throws 
          UndefinedShapeException 
        {
          if(shapeType.equals("rectangle")) {
            Rectangle rectangle = new Rectangle();
            rectangle.draw();
          } else if(shapeType.equals("square")) {
            Square square = new Square();
            square.draw();
          } else {
            String shapeNotSupportedMessage = "Shape " + shapeType + " 
                   not supported";
            logger.log(Level.INFO, shapeNotSupportedMessage);
            throw new UndefinedShapeException 
              (shapeNotSupportedMessage);
          }
        }
      }
 
      public static void main(String[] args) {
        DrawWithoutIOC drawWithoutIOC = new DrawWithoutIOC();
        drawWithoutIOC.draw("circle");
      }
    }