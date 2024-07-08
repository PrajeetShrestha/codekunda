<div class="code-container">
{% highlight swift %}
struct CustomButtonStyle: ButtonStyle {
    
    @Environment (\.isFocused) var focused
    var backgroundColor: Color = .orange
    var foregroundColor: Color = .white
    
    private var padding: Double = 32.0
    private var cornerRadius: Double = 20.0
    private var strokeWidth: Double = 5.0
    private var scale: Double = 1.05
    
    init(backgroundColor: Color, foregroundColor: Color) {
        self.backgroundColor = backgroundColor
        self.foregroundColor = foregroundColor
    }
    
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .padding(padding)
            .background(focused ? .orange : .clear)
            .foregroundColor(foregroundColor)
            .cornerRadius(cornerRadius)
            .overlay(
                RoundedRectangle(cornerRadius: cornerRadius)
                    .stroke(focused ? .clear : .white,
                            lineWidth: focused  ? 0 : strokeWidth)
            )
            .scaleEffect(focused ? scale : 1.0)
            .animation(.easeIn, value: focused ? scale : 1.0)
    }
}

{% endhighlight %}
</div>
