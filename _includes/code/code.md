<div class="code-container">
{% highlight swift %}
class CompositeService:Service {
    let network = NetworkDataService()
    let local = LocalDataService()
    let sample = SampleDataService()
    
    func getData() -> [String] {
        let isOnline = true
        let isSignedIn = true
        
        if isOnline && isSignedIn {
            return network.getData()
        } else if isOnline && !isSignedIn {
            return sample.getData()
        } else {
            return local.getData()
        }
    }
}
{% endhighlight %}
</div>
