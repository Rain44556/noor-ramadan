



const DuaCorner = () => {
  const videoId = "jcMHYZO5-_4";

  return (
    <div className="max-w-7xl mx-auto mt-10 lg:p-4 p-10">
      <h3 className="text-4xl font-bold text-purple-300">🤲 Noor e Dua</h3>
      <div className="grid lg:grid-cols-12 gap-8 mt-12">
        
        {/* Left Side: Text Content */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-2xl border border-purple-600">
            <h3 className="text-lg font-bold mb-2 text-purple-400">
              Duas Close to My Heart
            </h3>
            <ul className="space-y-3 text-purple-300">
              <li>• For the well-being and barakah in my parents lives</li>
              <li>• For forgiveness of my sins</li>
              <li>• For guidance and protection for my loved ones</li>
              <li>• For patience and peace in my heart</li>
              <li>• For help to do good and avoid harm</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl border border-purple-600">
            <h3 className="text-lg font-bold mb-2 text-purple-400">
              Dhikr to Practice Daily
            </h3>
            <div className="space-y-1 font-arabic text-right text-purple-300">
              <p>Allahu Akbar (الله أكبر) x 34</p>
              <p>Alhamdulillah (الحمد لله) x 33</p>
              <p>Subhanallah (سبحان الله) x 33</p>
              <p>Astaghfirullah (أستغفر الله) x 33</p>
              <p>La ilaha illallah (لا إله إلا الله) x 10</p>
            </div>
          </div>
        </div>

        {/* Right Side: Video Section */}
        <div className="lg:col-span-8">
          <div className="rounded-[2rem] p-0 shadow-xl border border-purple-600 bg-black/20">
            <div className="aspect-video rounded-[2rem] overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                /* Using the embed URL format is mandatory for iframes */
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Ramadan Dua"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          {/* Simple Link underneath */}
          <div className="mt-4 text-right">
            <a 
              href={`https://youtu.be/${videoId}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-200 text-sm transition-colors"
            >
              Watch directly on YouTube →
            </a>
          </div>
        </div>
         
      </div>
    </div>
  );
};

export default DuaCorner;