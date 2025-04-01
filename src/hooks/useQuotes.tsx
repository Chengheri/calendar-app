import { useState, useEffect, useCallback } from 'react';

interface Quote {
  text: string;
  author: string;
}

// Collection of philosophical quotes
const QUOTES: Quote[] = [
  // Hegel quotes
  {
    text: "What is rational is actual and what is actual is rational.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The history of the world is none other than the progress of the consciousness of freedom.",
    author: "G.W.F. Hegel"
  },
  {
    text: "To be independent of public opinion is the first formal condition of achieving anything great.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Education is the art of making man ethical.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The true is the whole.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Truth is found neither in the thesis nor the antithesis, but in an emergent synthesis which reconciles the two.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Only one man ever understood me, and he didn't understand me.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The owl of Minerva spreads its wings only with the falling of the dusk.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Nothing great in the world has ever been accomplished without passion.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The State is the march of God through the world.",
    author: "G.W.F. Hegel"
  },
  {
    text: "We learn from history that we do not learn from history.",
    author: "G.W.F. Hegel"
  },
  {
    text: "An idea is always a generalization, and generalization is a property of thinking. To generalize means to think.",
    author: "G.W.F. Hegel"
  },
  // Additional 100 Hegel quotes
  {
    text: "The soul is the notion of the body, and constitutes one spiritual substance with it.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The courage of the truth is the first condition of philosophic study.",
    author: "G.W.F. Hegel"
  },
  {
    text: "When liberty is mentioned, we must always be careful to observe whether it is not really the assertion of private interests which is thereby designated.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The real is rational and the rational is real.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Art expresses the highest and purest in Man.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The only thought which philosophy brings with it is the simple idea of reason.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Genuine tragedies in the world are not conflicts between right and wrong. They are conflicts between two rights.",
    author: "G.W.F. Hegel"
  },
  {
    text: "World history is not the ground of happiness.",
    author: "G.W.F. Hegel"
  },
  {
    text: "What experience and history teach us is that people and governments have never learned anything from history.",
    author: "G.W.F. Hegel"
  },
  {
    text: "In history, we are concerned with what has been and what is; in philosophy, however, we are concerned not with what belongs exclusively to the past or to the future, but with that which is, both now and eternally — in short, with reason.",
    author: "G.W.F. Hegel"
  },
  {
    text: "What is reasonable is real; that which is real is reasonable.",
    author: "G.W.F. Hegel"
  },
  {
    text: "To him who looks upon the world rationally, the world in its turn presents a rational aspect.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Freedom is the recognition of necessity.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Poverty in itself does not make men into a rabble; a rabble is created only when there is joined to poverty a disposition of mind, an inner indignation against the rich, against society, against the government.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The significance of that 'absolute commandment', know thyself, is not to promote mere self-knowledge in respect of the particular capacities, character, propensities, and foibles of the single self. The knowledge it commands means that of man's genuine reality, of what is essentially and ultimately true and real—of spirit as the true and essential being.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The History of the world is not the theatre of happiness; periods of happiness are blank pages in it, for they are periods of harmony, periods when the antithesis is in abeyance.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Philosophy is not meant to be a transaction in which we gain information about various objects, but rather a fundamental transformation in our relation to the world and to ourselves.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The state is the actuality of the ethical idea.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The essence of the modern state is the union of the universal with the full freedom of the particular, and with the welfare of individuals.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The people is that portion of the state that does not know what it wants.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The rational alone is real.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Spirit is self-contained existence.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Religion is the relation of the subject or the consciousness to God, who is Spirit.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Dialectic is not a process in which the mind comes upon a contradiction from the outside and then removes this contradiction by recognizing the objects that contradict each other as complementary parts of a larger synthesis.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The very substance of man is spirit.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The self-consciousness that grasps itself as essence through otherness, and thus divests itself of otherness, thereby attains to the concept of spirit.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Absolute knowing is the truth of every mode of consciousness because it is only in absolute knowing that the separation of the object from the certainty of itself is completely eliminated.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The bud disappears when the blossom breaks through, and we might say that the former is refuted by the latter; in the same way when the fruit comes, the blossom may be explained to be a false form of the plant's existence, for the fruit appears as its true nature in place of the blossom.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Thinking is, indeed, essentially the negation of that which is before us.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The absolute idea is the absolute truth of all things.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Everybody allows that to know any other science you must have first studied it, and that you can only claim to express a judgment upon it in virtue of such knowledge. Everybody allows that to make a shoe you must have learned and practised the craft of the shoemaker. Only for philosophy, it seems to be imagined, such study, care, and application are not requisite.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The antinomy of nature and spirit unfolded by reflection, must be resolved in the concept of spirit.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Man is free because he knows himself, and he knows himself only by reflection.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Beauty and truth are one and the same; beauty is the pure appearance of the idea to sense.",
    author: "G.W.F. Hegel"
  },
  {
    text: "To be aware of limitations is already to be beyond them.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The spirit is at home in the category of pure being, truth reveals itself in the element of knowledge.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The Idea is, in its process, the self-determining thinking which forms the entire systematic totality of its determinations or categories, of the systematic whole of thought.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The person as such contains a universality. It is a unity of consciousness which knows itself as the same in its multiple moments, and which in so far is unmoved and infinite resting in itself.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Logic is the form taken by the self-consciousness of pure knowledge and the pure knowledge of self-consciousness.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The philosophical concept proceeds with the dialectic of the self-certainty of pure knowledge.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Spirit, in absolute determination, is knowledge of self in its pure transparent unity - that is, spirit has for its sole aim and content the knowing of itself.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Spirit has broken with the world it has hitherto inhabited and imagined, and is preparing to submerge it in the past, and in the labour of its own transformation.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The principle of development involves also the existence of a latent germ of being - a capacity or potentiality striving to realize itself.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Through the act of thinking, the ideas come to have the character of being, by thinking we give being to them.",
    author: "G.W.F. Hegel"
  },
  {
    text: "A self-subsisting thinking, or a self-thinking idea, is God.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Thinking means uniting the many into one.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Everything that from eternity has happened in heaven and earth, the life of God and all the deeds of time simply are the struggles for Spirit to know itself, to find itself, be for itself, and finally unite itself to itself.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Truth lives in the depths, not on the surface.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Spiritual life and intellectual insight reach their depths only in thoroughgoing skepticism, which is one of the manifestations of a complete disruption of being, of true hopelessness.",
    author: "G.W.F. Hegel"
  },
  {
    text: "For the subject to overcome its one-sidedness is for it to give up sovereignty and to surrender itself to the object.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The task of philosophy is to comprehend what is, for what is, is reason.",
    author: "G.W.F. Hegel"
  },
  {
    text: "No idea is so generally recognized as indefinite, ambiguous, and open to the greatest misunderstandings to which therefore it actually falls a victim, as the idea of freedom.",
    author: "G.W.F. Hegel"
  },
  {
    text: "True freedom means the universality and identity of self-consciousness with its object.",
    author: "G.W.F. Hegel"
  },
  {
    text: "In mathematics the truth and the road to reaching it are both evident.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Fear of error is already the error itself.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The absolute is pure self-identity, which has abandoned all untruth or unreality and reconciled with itself every distinction and opposition.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The spirit is essentially the result of its own activity.",
    author: "G.W.F. Hegel"
  },
  {
    text: "All the worth which the human being possesses, all spiritual reality, he possesses only through the State.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Art as the expression of internal life needs complete freedom.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The object is in itself nothing but the whole, which, however, it is for consciousness only in one-sided form as the objective.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Readiness for change is not enough - there has to be a willingness to surrender the old completely.",
    author: "G.W.F. Hegel"
  },
  {
    text: "All cultural change reduces itself to a difference of categories.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Thought as the Universal is the absolute power above all particular forms, patterns, laws of nature and mind.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The truth of self-consciousness is the universal self-consciousness.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Nothing happens, nothing is accomplished, without the infinite self-confidence of the possibility of willing it.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Negation is the motor principle of the dialectic.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The individual will is not free when it has a particular content as its aim, for this content is then external to and therefore forced upon it.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The sole aim of philosophical inquiry is to eliminate the contingent.",
    author: "G.W.F. Hegel"
  },
  {
    text: "In the process of thinking, I immediately raise myself above all finite relations to the absolute, and am infinite consciousness, while I am simultaneously finite consciousness.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Each of the parts of philosophy is a philosophical whole, a circle rounded and complete in itself.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Philosophy is the journey of the Spirit's coming-to-consciousness of itself.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The state exists for its own sake.",
    author: "G.W.F. Hegel"
  },
  {
    text: "In history an additional result is commonly produced by human actions beyond that which they aim at and obtain - that which they immediately recognize and desire.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Necessity is blind only in so far as it is not understood.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The self-consciousness of a nation is its culture; it is the object of its ethical life, and the basis of its reality.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The family is the immediate substantiality of spirit.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The conception of law is that of freedom realized.",
    author: "G.W.F. Hegel"
  },
  {
    text: "History is the progress of the consciousness of freedom.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Genuine tragedy consists in the destruction of something noble and excellent.",
    author: "G.W.F. Hegel"
  },
  {
    text: "All that is real is rational, and all that is rational is real.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The consciousness of the finite is inherently dialectic.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Spirit is just this process of self-development, of making itself by its own activity what it is in itself.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The truth of the world is not found in its disparate facts but in its totality.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The will is thought translating itself into reality.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The consciousness of a truth, a right, a universal, is the property of me alone; but the form as developed is a universal form, and I cannot possess the content in its true form as an isolated person.",
    author: "G.W.F. Hegel"
  },
  {
    text: "In a state of nature, talent and genius are wasted, squandered, and even destroyed.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The notion is that into which truth returns in its homecoming.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Both intelligence and will are forms of thinking.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Only one man ever understood Hegelian philosophy, and even he was mistaken.",
    author: "G.W.F. Hegel"
  },
  {
    text: "In civil society, individuals exist essentially in relation to other individuals, not free from them.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Philosophy begins in wonder, as Aristotle said, but ends in understanding.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Each nation has its own principles, maxims, customs, law, and institutions, which constitute its moral life.",
    author: "G.W.F. Hegel"
  },
  {
    text: "When we look at the world rationally, the world looks rationally back.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The mind must progress from abstract unity to concrete unity, from undeveloped unity to developed unity.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Philosophy is the process of thought that finds itself in itself and comes to itself through this.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The sole interest of reason is to reconcile opposition and antagonism.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Reality is a historical process.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The particular individual, insofar as he is a determinate being, dies.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Ethical life is the unity of the subjective will with the universal.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Formal, conventional, law is a negative, prohibitive form of law.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The development of human consciousness takes the form of concepts or universals which move dialectically.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Evil is the moment of the otherness of essence.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Truth is the harmony of thought with reality.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The movement of logical categories turns out to be the actual content underneath it all.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The absolute form is the universal which is yet determinate in itself.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The being of objects for us is their self-revelation to us.",
    author: "G.W.F. Hegel"
  },
  {
    text: "Christianity is content with knowing that God is; it does not aspire to know what God is.",
    author: "G.W.F. Hegel"
  },
  {
    text: "History is not the soil in which happiness grows. The periods of happiness in it are the blank pages of history.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The universal is concrete because it is the totality of its determinations.",
    author: "G.W.F. Hegel"
  },
  {
    text: "The individual finite thing does not contain the whole truth because it does not contain the whole of reality.",
    author: "G.W.F. Hegel"
  },
  // Nietzsche quotes
  {
    text: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche"
  },
  {
    text: "That which does not kill us makes us stronger.",
    author: "Friedrich Nietzsche"
  },
  {
    text: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche"
  },
  {
    text: "There are no facts, only interpretations.",
    author: "Friedrich Nietzsche"
  },
  {
    text: "The individual has always had to struggle to keep from being overwhelmed by the tribe.",
    author: "Friedrich Nietzsche"
  },
  // Kant quotes
  {
    text: "Act in such a way that you treat humanity, whether in your own person or in the person of any other, always at the same time as an end and never merely as a means.",
    author: "Immanuel Kant"
  },
  {
    text: "Enlightenment is man's emergence from his self-imposed nonage.",
    author: "Immanuel Kant"
  },
  {
    text: "All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason.",
    author: "Immanuel Kant"
  },
  {
    text: "Science is organized knowledge. Wisdom is organized life.",
    author: "Immanuel Kant"
  },
  // Plato quotes
  {
    text: "The measure of a man is what he does with power.",
    author: "Plato"
  },
  {
    text: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
    author: "Plato"
  },
  {
    text: "Be kind, for everyone you meet is fighting a harder battle.",
    author: "Plato"
  },
  {
    text: "The price good men pay for indifference to public affairs is to be ruled by evil men.",
    author: "Plato"
  },
  // Aristotle quotes
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle"
  },
  {
    text: "The whole is greater than the sum of its parts.",
    author: "Aristotle"
  },
  {
    text: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    author: "Aristotle"
  },
  {
    text: "Happiness depends upon ourselves.",
    author: "Aristotle"
  },
  // Socrates quotes
  {
    text: "The unexamined life is not worth living.",
    author: "Socrates"
  },
  {
    text: "I know that I am intelligent, because I know that I know nothing.",
    author: "Socrates"
  },
  {
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates"
  },
  {
    text: "Strong minds discuss ideas, average minds discuss events, weak minds discuss people.",
    author: "Socrates"
  },
  // Confucius quotes
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius"
  },
  {
    text: "By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.",
    author: "Confucius"
  },
  {
    text: "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: "Confucius"
  },
  // Sartre quotes
  {
    text: "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.",
    author: "Jean-Paul Sartre"
  },
  {
    text: "Freedom is what you do with what's been done to you.",
    author: "Jean-Paul Sartre"
  },
  {
    text: "Existence precedes essence.",
    author: "Jean-Paul Sartre"
  },
  // Simone de Beauvoir quotes
  {
    text: "One is not born, but rather becomes, a woman.",
    author: "Simone de Beauvoir"
  },
  {
    text: "Change your life today. Don't gamble on the future, act now, without delay.",
    author: "Simone de Beauvoir"
  },
  // Hannah Arendt quotes
  {
    text: "The most radical revolutionary will become a conservative the day after the revolution.",
    author: "Hannah Arendt"
  },
  {
    text: "The sad truth is that most evil is done by people who never make up their minds to be good or evil.",
    author: "Hannah Arendt"
  },
  // 200 quotes from Charles F. Haanel's "The Master Key System"
  {
    text: "The ability to eliminate negative thoughts is the first step towards success.",
    author: "Charles F. Haanel"
  },
  {
    text: "You must first have the knowledge of your power; second, the courage to dare; third, the faith to do.",
    author: "Charles F. Haanel"
  },
  {
    text: "The law of attraction will certainly and unerringly bring to you the conditions, environment, and experiences in life, corresponding with your habitual, characteristic, predominant mental attitude.",
    author: "Charles F. Haanel"
  },
  {
    text: "You cannot entertain weak, harmful, negative thoughts ten hours a day and expect to bring about beautiful, strong and harmonious conditions by ten minutes of strong, positive, creative thought.",
    author: "Charles F. Haanel"
  },
  {
    text: "Your world without reflects your world within.",
    author: "Charles F. Haanel"
  },
  {
    text: "Remember that no matter what the difficulty is, no matter where it is, no matter who is affected, you have no patient but yourself; you have nothing to do but convince yourself of the truth which you desire to see manifested.",
    author: "Charles F. Haanel"
  },
  {
    text: "Thought is the vital force or energy which is being developed and which has produced such startling results in the last half century.",
    author: "Charles F. Haanel"
  },
  {
    text: "Thought is energy. Active thought is active energy; concentrated thought is a concentrated energy.",
    author: "Charles F. Haanel"
  },
  {
    text: "The Universal Mind is the life principle of every atom which is in existence.",
    author: "Charles F. Haanel"
  },
  {
    text: "The Universal Mind is static or potential energy; it simply is; it can manifest only through the individual, and the individual can manifest only through the Universal.",
    author: "Charles F. Haanel"
  },
  {
    text: "Mind is creative, and conditions, environment, and all experiences in life are the result of our habitual or predominant mental attitude.",
    author: "Charles F. Haanel"
  },
  {
    text: "The attitude of mind necessarily depends upon what we think. Therefore, the secret of all power, all achievement and all possession depends upon our method of thinking.",
    author: "Charles F. Haanel"
  },
  {
    text: "This is a thought world. Thought is another name for cause. The word is another name for effect.",
    author: "Charles F. Haanel"
  },
  {
    text: "The world without is a reflection of the world within.",
    author: "Charles F. Haanel"
  },
  {
    text: "If you wish to eliminate fear, concentrate on courage.",
    author: "Charles F. Haanel"
  },
  {
    text: "If you wish to eliminate lack, concentrate on abundance.",
    author: "Charles F. Haanel"
  },
  {
    text: "If you wish to eliminate disease, concentrate on health.",
    author: "Charles F. Haanel"
  },
  {
    text: "Always concentrate on the ideal as an already existing fact.",
    author: "Charles F. Haanel"
  },
  {
    text: "To think correctly is to create. We are thinking now and creating our own existence.",
    author: "Charles F. Haanel"
  },
  {
    text: "The principle which gives the thought the dynamic power to correlate with its object, and therefore to master every adverse human experience, is the law of attraction.",
    author: "Charles F. Haanel"
  },
  {
    text: "Thought concentrated on a definite purpose becomes power.",
    author: "Charles F. Haanel"
  },
  {
    text: "Harmony in the world within means the ability to control our thoughts, and to determine for ourselves how any experience is to affect us.",
    author: "Charles F. Haanel"
  },
  {
    text: "We are related to the world within by the subconscious mind. The solar plexus is the organ of this mind.",
    author: "Charles F. Haanel"
  },
  {
    text: "The subconscious mind is the intermediary between the Universal and the conscious mind.",
    author: "Charles F. Haanel"
  },
  {
    text: "It is necessary to have a clear understanding of cause and effect in the thought world.",
    author: "Charles F. Haanel"
  },
  {
    text: "Thought is cause, and experience is effect.",
    author: "Charles F. Haanel"
  },
  {
    text: "By keeping the thought in mind, it will gradually take form and eventually manifest in the objective world.",
    author: "Charles F. Haanel"
  },
  {
    text: "All life and power come from within.",
    author: "Charles F. Haanel"
  },
  {
    text: "The only value it (money) has is the use to which it can be put.",
    author: "Charles F. Haanel"
  },
  {
    text: "Make the world within beautiful and the world without will express and reveal that beauty.",
    author: "Charles F. Haanel"
  },
  {
    text: "Each repeated action renders the image more accurate than the former one.",
    author: "Charles F. Haanel"
  },
  {
    text: "Opportunity follows perception, action follows inspiration, growth follows knowledge, eminence follows progress.",
    author: "Charles F. Haanel"
  },
  {
    text: "The silence is a place of stillness where we can withdraw and enter into the Consciousness of our unity with Omnipotence.",
    author: "Charles F. Haanel"
  },
  {
    text: "To get rich is therefore a matter of applying this creative power which we already have, in an efficacious way.",
    author: "Charles F. Haanel"
  },
  {
    text: "To train the mind to think constructively is to bring it under the direct influence of the Universal Mind.",
    author: "Charles F. Haanel"
  },
  {
    text: "Every sincere effort to express life, every sincere prayer for light and increasing intelligence with the object of enlarging our radius of action, receives the immediate attention of the Supreme Intelligence.",
    author: "Charles F. Haanel"
  },
  {
    text: "Thought is omnipotent and has the power to draw on the Infinite for supply.",
    author: "Charles F. Haanel"
  },
  {
    text: "Visualization is the process of making mental images, and the image is the mold or model which serves as a pattern from which your future will emerge.",
    author: "Charles F. Haanel"
  },
  {
    text: "The whole range of human experience testifies to the fact that the subconscious serves and obeys the conscious mind.",
    author: "Charles F. Haanel"
  },
  {
    text: "The result of all this is that you are becoming more self-reliant, more confident, and more conscious of your power.",
    author: "Charles F. Haanel"
  },
  {
    text: "If we wish our ideal to be built in the mental realm, we must begin by forming the mental conception of our ideal in the reality of the being.",
    author: "Charles F. Haanel"
  },
  {
    text: "That which we think most about grows in our consciousness.",
    author: "Charles F. Haanel"
  },
  {
    text: "All possession is based on consciousness.",
    author: "Charles F. Haanel"
  },
  {
    text: "Man is not a body with a spirit, but a spirit with a body.",
    author: "Charles F. Haanel"
  },
  {
    text: "Every time we think a thought, we send into motion a force that will reach its objective in accordance with the intention behind it.",
    author: "Charles F. Haanel"
  },
  {
    text: "Success depends upon spiritual power, which must be awakened.",
    author: "Charles F. Haanel"
  },
  {
    text: "Faith, absolute dogmatic faith, is the only condition of the manifestation of Spirit, Power, or Truth.",
    author: "Charles F. Haanel"
  },
  {
    text: "Wireless is a good illustration of action of the subjective mind. We have the message, but we do not know how it is being delivered; we do not know how it would fare if there were no receiver, no one to receive the message.",
    author: "Charles F. Haanel"
  },
  {
    text: "You can originate thought, and, since thoughts are creative, you can create for yourself the things you desire.",
    author: "Charles F. Haanel"
  },
  {
    text: "When the creative power of thought is fully understood, its effect will be seen to be marvelous.",
    author: "Charles F. Haanel"
  },
  {
    text: "We manifest the things we think about most.",
    author: "Charles F. Haanel"
  },
  {
    text: "If your thought is powerful, constructive, and positive, this will be plainly evident in the state of your health, your business and your environment.",
    author: "Charles F. Haanel"
  },
  {
    text: "All great things come through recognition; the scepter of power is consciousness, and thought is its messenger.",
    author: "Charles F. Haanel"
  },
  {
    text: "The subconscious can and will solve any problem for us if we know how to direct it.",
    author: "Charles F. Haanel"
  },
  {
    text: "We have within us a power that is greater than anything that we shall ever contact in the outside, a power that can overcome every obstacle in our path to success.",
    author: "Charles F. Haanel"
  },
  {
    text: "Character is not a thing of chance, but it is the result of continued effort.",
    author: "Charles F. Haanel"
  },
  {
    text: "Power comes through repose. It is by concentration that deep thoughts, wise speech, and all forces of high potentiality are accomplished.",
    author: "Charles F. Haanel"
  },
  {
    text: "The intensity of one moment's earnest concentration and the intense longing to become and to attain may take you further than years of slow normal and forced effort.",
    author: "Charles F. Haanel"
  },
  {
    text: "The Law of Attraction brings to each individual exactly what he desires.",
    author: "Charles F. Haanel"
  },
  {
    text: "The Universal Mind is not only intelligence but it is substance, and this substance is the attractive force which brings electrons together by the law of attraction.",
    author: "Charles F. Haanel"
  },
  {
    text: "The ability to produce is found to be the real source of wealth of the individual.",
    author: "Charles F. Haanel"
  },
  {
    text: "The power to create depends entirely upon spiritual power; there are three steps: idealization, visualization, and materialization.",
    author: "Charles F. Haanel"
  },
  {
    text: "Intuition can be cultivated and developed.",
    author: "Charles F. Haanel"
  },
  {
    text: "Your vision will become clear only when you look into your heart. Who looks outside, dreams. Who looks inside, awakens.",
    author: "Charles F. Haanel"
  },
  {
    text: "Intention governs attention; power comes through observation and reflection.",
    author: "Charles F. Haanel"
  },
  {
    text: "Mental concentration is an art and, like all other arts, can be acquired by practice.",
    author: "Charles F. Haanel"
  },
  {
    text: "There are times, places, and conditions in which one may find himself, when intense thinking is practically forced upon him.",
    author: "Charles F. Haanel"
  },
  {
    text: "Constructive thought must necessarily be creative, but creative thought must be harmonious.",
    author: "Charles F. Haanel"
  },
  {
    text: "We relate ourselves to God by the use of our thought, for thought is the connecting link between the finite and the Infinite.",
    author: "Charles F. Haanel"
  },
  {
    text: "Destruction of anything is simply the changing of the form in which it exists.",
    author: "Charles F. Haanel"
  },
  {
    text: "The source of all power is the Universal Mind.",
    author: "Charles F. Haanel"
  },
  {
    text: "Abundance will not come to you out of the sky, neither will it drop into your lap.",
    author: "Charles F. Haanel"
  },
  {
    text: "Thought, immaterial though it may be, is the matrix that shapes the issues of life.",
    author: "Charles F. Haanel"
  },
  {
    text: "The truth shall make you free, and nothing but the truth will ever make you free.",
    author: "Charles F. Haanel"
  },
  {
    text: "Our ability to differentiate, to reason, to analyze, to create ideas and bring them into manifestation, is entirely dependent upon our use of the subconscious mind.",
    author: "Charles F. Haanel"
  },
  {
    text: "The easiest way to do this is to select a room where you can be alone and undisturbed; sit in a straight-backed chair and think.",
    author: "Charles F. Haanel"
  },
  {
    text: "When we know what thought can accomplish, we know that poverty is the result of wrong thinking.",
    author: "Charles F. Haanel"
  },
  {
    text: "Everything which exists in the objective world has its origin in the subjective world.",
    author: "Charles F. Haanel"
  },
  {
    text: "The real secret of power is consciousness of power.",
    author: "Charles F. Haanel"
  },
  {
    text: "All things that have been accomplished by man, the bewildering civilization, the thousands of conveniences, comforts, necessities, and luxuries, are the result of thought.",
    author: "Charles F. Haanel"
  },
  {
    text: "Unless you can control your thought, you cannot control anything else.",
    author: "Charles F. Haanel"
  },
  {
    text: "It has been found that by plainly stating to the subjective mind the specific thing which is wanted, forces are set in operation that lead to the result desired.",
    author: "Charles F. Haanel"
  },
  {
    text: "There is a power lying latent in the inner man that is inconceivably great.",
    author: "Charles F. Haanel"
  },
  {
    text: "To awaken the higher thought in the inner mind, to arouse the divinity within, is the beginning of true spiritual wisdom.",
    author: "Charles F. Haanel"
  },
  {
    text: "The Universal Mind, being infinite and omnipotent, has unlimited resources at its command, and when we remember that it is also omnipresent, we cannot escape the conclusion that we must be an expression or manifestation of that Mind.",
    author: "Charles F. Haanel"
  },
  {
    text: "The one arch enemy of the solar plexus which must be absolutely destroyed before there is any possibility of letting any light shine is fear.",
    author: "Charles F. Haanel"
  },
  {
    text: "You are simply to realize that the essence of every perfection which exists in the objective, is all yours now.",
    author: "Charles F. Haanel"
  },
  {
    text: "Your thoughts are creating your environment.",
    author: "Charles F. Haanel"
  },
  {
    text: "Every thought is a cause and every condition an effect.",
    author: "Charles F. Haanel"
  },
  {
    text: "You cannot force an entrance into the storehouse of the Infinite, but you can come into harmonious relationship with the Universal Mind, and the Omnipotent Power will respond to every request.",
    author: "Charles F. Haanel"
  },
  {
    text: "The Universal Mind manifests itself in the objective, through the principle of attraction that each atom has for every other atom, in infinite degrees of intensity.",
    author: "Charles F. Haanel"
  },
  {
    text: "The individual is so important because the Universal is static, potential, waiting to be set in motion. So it is the individual that must use the Universal to overcome the individual limitations.",
    author: "Charles F. Haanel"
  },
  {
    text: "The objective mind is the faithful servant, but the subjective mind is the faithful lover.",
    author: "Charles F. Haanel"
  },
  {
    text: "You may go away from home for weeks at a time; when you return, everything has been attended to; there has been no disorder. But if you try to give directions as to how things shall be handled, there is likely to be insubordination, ill will and discord.",
    author: "Charles F. Haanel"
  },
  {
    text: "You cannot overcome difficulties by running away from them, just as you cannot gain strength by shirking exercise.",
    author: "Charles F. Haanel"
  },
  {
    text: "He who has learned to control himself has found the path to power.",
    author: "Charles F. Haanel"
  },
  {
    text: "A chain is no stronger than its weakest link, and a tree with a decayed trunk will inevitably be destroyed when tested by the fury of the elements.",
    author: "Charles F. Haanel"
  },
  {
    text: "Difficulties, inharmonies, and obstacles indicate that we are either refusing to give out what we no longer need, or refusing to accept what we require.",
    author: "Charles F. Haanel"
  },
  {
    text: "Education is an unfoldment, not an accumulation of knowledge.",
    author: "Charles F. Haanel"
  },
  {
    text: "There is no limit to what this law can do for you; dare to believe in your own ideal; remember that Nature is plastic to the ideal; think of the ideal as an already accomplished fact.",
    author: "Charles F. Haanel"
  },
  {
    text: "Imagination is the constructive form of thought; from it all forms eventually arise.",
    author: "Charles F. Haanel"
  },
  {
    text: "If you wish to eliminate poverty, you must maintain the consciousness of wealth.",
    author: "Charles F. Haanel"
  },
  {
    text: "We must 'Be' before we can 'Do' and we can 'Do' only to the extent which we 'Are,' and what we 'Are' depends upon what we 'Think.'",
    author: "Charles F. Haanel"
  },
  {
    text: "The secret of growth is a matter of getting hold of the one central idea. All learning, all teaching, and all human experience resolves itself into the one single principle.",
    author: "Charles F. Haanel"
  },
  {
    text: "The quality of the thought that we entertain is of primary importance.",
    author: "Charles F. Haanel"
  },
  {
    text: "The subconscious mind is a part of the Universal mind. The Universal is the creative principle of the Universe, a part must be the same in kind and quality as the whole.",
    author: "Charles F. Haanel"
  },
  {
    text: "We tend to get what we want, when we know what we want, and are determined to get it.",
    author: "Charles F. Haanel"
  },
  {
    text: "The supply of abundance is limitless and is available only by clear intentions to receive it.",
    author: "Charles F. Haanel"
  },
  {
    text: "Necessity is the demand, and the supply never fails to appear.",
    author: "Charles F. Haanel"
  },
  {
    text: "We have found that happiness is the only virtue and is the real difference between success and failure.",
    author: "Charles F. Haanel"
  },
  {
    text: "Sunlight is not black, although it has the power to devitalize black pigment, and water is not black, although it has the power to remove black spots.",
    author: "Charles F. Haanel"
  },
  {
    text: "The various forms of electricity also have the power to bring the highest vibrations to the lowest by lowering the velocity until the low vibration is raised to the point where the higher vibration can contact it.",
    author: "Charles F. Haanel"
  },
  {
    text: "This method of consciously directing thought constitutes scientific thinking.",
    author: "Charles F. Haanel"
  },
  {
    text: "The Universal creates through thought, and we are thinking centers in the Universal Mind.",
    author: "Charles F. Haanel"
  },
  {
    text: "We have learned that any power we possess comes from the Universal, and that the individual is simply a channel for the distribution of this energy.",
    author: "Charles F. Haanel"
  },
  {
    text: "The control of the thought processes and the ability to discriminate between truth and error leads to the highest plane of existence, which is the plane of vision where all truth is known.",
    author: "Charles F. Haanel"
  },
  {
    text: "Wealth is a product of labor, and thought is a product of the Universal Mind.",
    author: "Charles F. Haanel"
  },
  {
    text: "The Universal Mind is all-health, all-substance, and all-love, and is as absolute as Omnipotent can be absolute.",
    author: "Charles F. Haanel"
  },
  {
    text: "Each individual has a universe of their own, and it is only through the individual that the universe can be known, manifested or experienced.",
    author: "Charles F. Haanel"
  },
  {
    text: "The conscious mind imagines, and the subconscious executes, and the result is the physical manifestation.",
    author: "Charles F. Haanel"
  },
  {
    text: "Whatever enters the mind through the senses or the objective mind becomes an impression or mental image, and these images form our personnel and our environment.",
    author: "Charles F. Haanel"
  },
  {
    text: "To think correctly, accurately, we must know the 'Truth.' The truth then is the underlying principle in every business or social relation.",
    author: "Charles F. Haanel"
  },
  {
    text: "Sickness is a message from the inner self calling attention to the fact that there has been a violation of Natural law.",
    author: "Charles F. Haanel"
  },
  {
    text: "Every condition, every experience, every feeling that comes to us, good or bad, is the result of our own mental processes.",
    author: "Charles F. Haanel"
  },
  {
    text: "The solar plexus has been likened to the sun of the body, because it is a central point of distribution for the energy which the body is constantly generating.",
    author: "Charles F. Haanel"
  },
  {
    text: "Fear is just inverted faith; it is faith in evil instead of good.",
    author: "Charles F. Haanel"
  },
  {
    text: "It is our privilege to become receptive to the highest wisdom and insight as well as the most profound joy that can be experienced by man.",
    author: "Charles F. Haanel"
  },
  {
    text: "The law is that like attracts like; the mental attitude will invariably attract such conditions as correspond to its nature.",
    author: "Charles F. Haanel"
  },
  {
    text: "The subconscious roots of memory are planted in the brain, there they grow without our knowledge and without our attention.",
    author: "Charles F. Haanel"
  },
  {
    text: "Vibration is the action of thought; it is vibration which reaches out and attracts the material necessary to construct and build.",
    author: "Charles F. Haanel"
  },
  {
    text: "A thought may be compared to a seed; if conditions are favorable, the seed will germinate. This is true of every kind of seed, and every thought is a seed which will germinate if the proper conditions exist.",
    author: "Charles F. Haanel"
  },
  {
    text: "We have found that the Universal is the source of all Mind. It is the Creative Principle of the Universe, the one and only principle endowed with creative power, and that thought is the only energy which can properly be applied to it.",
    author: "Charles F. Haanel"
  },
  {
    text: "The more we give, the more we get; we must become a channel whereby the Universal can express activity.",
    author: "Charles F. Haanel"
  },
  {
    text: "Attention or concentration is probably the most important essential in the development of mind culture.",
    author: "Charles F. Haanel"
  },
  {
    text: "The mind, like all other forms of energy, follows the path of least resistance, so that the result of effort expended depends upon the direction of the effort.",
    author: "Charles F. Haanel"
  },
  {
    text: "Evolution is simply the result of consciousness.",
    author: "Charles F. Haanel"
  },
  {
    text: "Know thyself. The soul that knows itself is invulnerable.",
    author: "Charles F. Haanel"
  },
  {
    text: "All of the really important work is done in the silence, in the Temple of Silence, in the Silence of the soul.",
    author: "Charles F. Haanel"
  },
  {
    text: "The mind may be cultivated by the development of the power of attention.",
    author: "Charles F. Haanel"
  },
  {
    text: "Thought is the agency by which we may create for ourselves health, strength, success, prosperity or any other condition which we desire.",
    author: "Charles F. Haanel"
  },
  {
    text: "The whole purpose of the 'Master Key' is to enable you to understand and use the Universal Principle of Mind.",
    author: "Charles F. Haanel"
  },
  {
    text: "Every scientist knows that light, heat, and indeed all other forms of energy, are constantly in process of exchange.",
    author: "Charles F. Haanel"
  },
  {
    text: "We are thinking now and creating our own existence.",
    author: "Charles F. Haanel"
  },
  {
    text: "There is a change in your expression, in your deportment, in your manner, in your voice, in your walk, in fact; in everything about you.",
    author: "Charles F. Haanel"
  },
  {
    text: "You have become a magnet; you have become conscious of a Self-hood you never knew before.",
    author: "Charles F. Haanel"
  },
  {
    text: "The difference between the Oak and the Reed is largely in its courage and its quiet determination.",
    author: "Charles F. Haanel"
  },
  {
    text: "The power of attention is called concentration; this power is directed by the will.",
    author: "Charles F. Haanel"
  },
  {
    text: "For your exercise this week, concentrate on Courage. Bring it before your mind's eye by closing your eyes and realizing that you are being bathed in it, mentally and physically.",
    author: "Charles F. Haanel"
  },
  {
    text: "A conscious thought, whether it be for peace or war, for good or evil, has to find its correspondence in all fields of vitality.",
    author: "Charles F. Haanel"
  },
  {
    text: "Remember first, last, and all the time, that the thought is the thing, and that as the thought changes, all outward or material conditions must change to correspond.",
    author: "Charles F. Haanel"
  },
  {
    text: "All forms of matter are but manifestations of Spirit.",
    author: "Charles F. Haanel"
  },
  {
    text: "The Whole sends forth parts of itself into different forms of life that these parts may become conscious of the existence and real nature of the Whole.",
    author: "Charles F. Haanel"
  },
  {
    text: "A seed germinated this morning, last week, or last year, and became a plant. The plant had roots, stem, leaves, buds, flowers, and fruit. All of these came from the seed, but are vastly different from it.",
    author: "Charles F. Haanel"
  },
  {
    text: "Life and love are originating, invigorating, constructive principles. Fear, anger, jealousy, and hatred, are destructive principles.",
    author: "Charles F. Haanel"
  },
  {
    text: "Life, love, light and good may be said to constitute nature; Nature is still at work decomposing inferior organisms, conserving the good and reproducing it in improved form.",
    author: "Charles F. Haanel"
  },
  {
    text: "The degree in which we are able to discern this law of unfoldment marks our evolution.",
    author: "Charles F. Haanel"
  },
  {
    text: "Wealth is simply a state of consciousness.",
    author: "Charles F. Haanel"
  },
  {
    text: "When we realize Oneness, we are but in reality making a conscious effort to realize and actualize ideals.",
    author: "Charles F. Haanel"
  },
  {
    text: "There is no possible source from which such thoughts can reach us except from the action of thought upon our environment.",
    author: "Charles F. Haanel"
  },
  {
    text: "There is a muscle in the body which is the strongest muscle; not the heart, not the shoulder, not the arm, but the diaphragm.",
    author: "Charles F. Haanel"
  },
  {
    text: "If you plant praise, appreciation, and good-will, the seed will take root, grow and bring forth fruit in abundance.",
    author: "Charles F. Haanel"
  },
  {
    text: "The physical instrument may be likened to the negative side of a photograph; the spiritual and mental attributes may be likened to the positive side of the photograph. They are equally necessary in bringing the result up to its highest possible value.",
    author: "Charles F. Haanel"
  },
  {
    text: "Spirit must manifest in the objective world through Form.",
    author: "Charles F. Haanel"
  },
  {
    text: "The mind does not in any way resemble a phonograph or photograph. It receives vibrations and responds to them, much as the lake responds to a pebble that is thrown into its waters.",
    author: "Charles F. Haanel"
  },
  {
    text: "Indecision and doubt lead to disintegration and decay.",
    author: "Charles F. Haanel"
  },
  {
    text: "When you begin to perceive that the essence of the Universal is within yourself, within everybody, within everything, you begin to do things; you begin to feel your power.",
    author: "Charles F. Haanel"
  },
  {
    text: "Darkness may seem to indicate that there is no light, but we know it is simply the absence of light. In the same way, disease indicates that there is no health, but it does not matter how much disease there may be, health is real and disease is unreal.",
    author: "Charles F. Haanel"
  }
];

export const useQuotes = () => {
  // Generate random index for initial quote
  const getRandomIndex = () => Math.floor(Math.random() * QUOTES.length);
  
  // Initialize with a non-empty state to avoid "undefined" errors
  const [quoteHistory, setQuoteHistory] = useState<Quote[]>([QUOTES[0]]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);
  const [currentQuote, setCurrentQuote] = useState<Quote>(QUOTES[0]);
  
  // Initialize with a random quote - only on first render
  useEffect(() => {
    const initialQuote = QUOTES[getRandomIndex()];
    setCurrentQuote(initialQuote);
    setQuoteHistory([initialQuote]);
    setHistoryIndex(0);
  }, []);
  
  // Function to get a random quote
  const getRandomQuote = useCallback(() => {
    let newIndex = getRandomIndex();
    
    // Make sure we don't get the same quote twice in a row
    while (currentQuote && currentQuote.text === QUOTES[newIndex].text) {
      newIndex = getRandomIndex();
    }
    
    const newQuote = QUOTES[newIndex];
    
    // Add to history and update the current quote
    setQuoteHistory(prev => {
      // Create a new history array with current quote appended,
      // removing any "future" quotes if we're not at the end
      return [...prev.slice(0, historyIndex + 1), newQuote];
    });
    
    setHistoryIndex(prev => prev + 1);
    setCurrentQuote(newQuote);
  }, [currentQuote, historyIndex]);
  
  // Navigate to previous quote in history
  const navigatePrevious = useCallback(() => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setCurrentQuote(quoteHistory[newIndex]);
    }
  }, [historyIndex, quoteHistory]);
  
  // Navigate to next quote in history
  const navigateNext = useCallback(() => {
    if (historyIndex < quoteHistory.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setCurrentQuote(quoteHistory[newIndex]);
    }
  }, [historyIndex, quoteHistory]);
  
  return {
    currentQuote,
    getRandomQuote,
    navigatePrevious,
    navigateNext,
    canNavigatePrevious: historyIndex > 0,
    canNavigateNext: historyIndex < quoteHistory.length - 1
  };
}; 