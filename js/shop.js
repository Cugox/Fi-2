
const books =
    [
        { title: "Great Circle", author: "Maggie Shipstead", price: 9.99, genre: ["fiction", "historical"], rating: 4, Summary: ["Great Circle by Maggie Shipstead is a historical novel that follows the life of Marian Graves, an ambitious aviator in the 1930s who strives to complete a round-the-world flight. Her daring journey is marked by numerous challenges and societal obstacles. The novel also includes a modern-day storyline about Hadley Baxter, an actress cast in a film about Marian, exploring the enduring impact of Marian's adventurous spirit."], image: "../images/book4.jpg" },
        { title: "Klara and the Sun", author: "Kazuo Ishiguro", price: 6.99, genre: ["fiction", "science fiction"], rating: 5, Summary: ["Klara and the Sun by Kazuo Ishiguro is a thought-provoking novel that explores themes of artificial intelligence and human emotion through the perspective of Klara, an Artificial Friend who observes and reflects on human behavior. The story delves into Klara's experiences and her search for a deeper understanding of her world."], image: "../images/book3.jpg" },
        { title: "The Chibok Girls", author: "Helon Habila", price: 8.5, genre: ['nonfiction', 'historical'], rating: 4.9, Summary: ['Reporting from inside the traumatised and blockaded community of Chibok, Helon Habila tracks down the survivors and the bereaved. Two years after the attack, he bears witness to their stories and to their grief. And moving from the personal to the political, he presents a comprehensive indictment of Boko Haram, tracing the circumstances of their ascent and the terrible fallout of their ongoing presence in Nigeria.'], image: "../images/The_Chibok_Girls_by_Helon_Habila_book_cover.png" },
        { title: "The Midnight Library", author: "Matt Haig", price: 10.99, genre: ["fiction", "fantasy"], rating: 4.5, Summary: ["The Midnight Library by Matt Haig is a captivating and imaginative story about Nora Seed, who finds herself in a magical library that allows her to explore the infinite possibilities of her life. Each book in the library represents a different path her life could have taken, offering profound insights and reflections on choices and regrets."], image: "../images/TheMidnightLibrary.png" },
        { title: "The Girl with the Louding Voice", author: "Abi Daré", price: 6.99, genre: ["fiction", "coming-of-age"], rating: 3, Summary: ["The Girl with the Louding Voice by Abi Daré tells the story of Adunni, a young Nigerian girl who dreams of getting an education and finding her own voice despite the challenges and societal norms she faces. The novel is a powerful narrative about resilience, empowerment, and the fight for one's rights."], image: "../images/book5.jpg" },
        { title: "Educated", author: "Tara Westover", price: 4.99, genre: ["memoir", "biography"], rating: 4.7, Summary: ["Educated by Tara Westover is a compelling memoir that chronicles Westover's journey from growing up in a strict and abusive household in rural Idaho to earning a PhD from Cambridge University. The book explores themes of self-discovery, education, and the struggle for autonomy against oppressive family dynamics."], image: "../images/educated-book.jpg" },
        { title: "Underground Royalty", author: "Mel Torrefranca ", price: 2.99, genre: [" mystery", "crime","fiction"], rating: 3.7, Summary: ["Pinto’s life is in shambles. With Yahshi and Vell vanished and his fellow guardians turned against him, his only ally is Evaris. Together, they dig into the pasts of Pinto’s best friends, uncovering secrets that force him to question his loyalties."], image: "../images/Nightshade-Academy_kids_fiction.jpg" },
        { title: "Where the Crawdads Sing", author: "Delia Owens", price: 6.99, genre: ["fiction", "mystery"], rating: 4.8, Summary: ["Where the Crawdads Sing by Delia Owens is a gripping novel set in the marshes of North Carolina. It follows the life of Kya Clark, a young girl who grows up isolated from society and becomes the prime suspect in a local murder case. The novel beautifully blends mystery, romance, and a poignant exploration of nature and loneliness."], image: "../images/wherethecraw.jpg" },
        { title: "Atomic Habits", author: "James Clear", price: 12.99, genre: "self-help", rating: 4.6, Summary: ["Atomic Habits by James Clear provides practical advice on how to build good habits and break bad ones. Clear offers a framework for personal development through small, incremental changes, emphasizing the importance of systems and consistency in achieving long-term goals."], image: "../images/atomic-habits.jpg" },
        { title: "The Silent Patient", author: "Alex Michaelides", price: 13.99, genre: "thriller", rating: 4.4, Summary: ["The Silent Patient by Alex Michaelides is a psychological thriller about Alicia Berenson, a famous painter who shoots her husband and then stops speaking. The novel follows Theo Faber, a forensic psychologist, as he investigates Alicia's silence and uncovers deep-seated secrets."], image: "../images/silent-patient.jpeg" },
        { title: "Next Level Thinking", author: "Joel Osteen", price: 8.99, genre: ['christain', 'nonfiction'], rating: 4.4, Summary: ["What’s happened? Instead of moving forward, we’ve adapted to our environment. Instead of pushing beyond our bounds, we’ve allowed a bad break, how we were raised, living with insecurity, or what someone did or didn’t do to hold us back.The good news is that people don’t determine our destiny-God does."], image: "../images/joelOsteen_christain_nextlevelThinking.png" },
        { title: "Alone with God", author: "Francis Wale Oke", price: 5.99, genre: ['christain', 'nonfiction'], rating: 4.4, Summary: ["Alone with God -Bringing a prayer revolution into your life. Is a must for all homes who believes in the efficacy of prayers"], image: "../images/aloneWithGod_Wale_Oke_Christain.jpg" },
        { title: "Holier Than Thou", author: "Jackie Hill Perry", price: 8.9, genre: ['christain', 'nonfiction'], rating: 4, Summary: ["Why is it so hard to trust God sometimes? We say we trust Him with our mouths, but often not with our lives. We live like God can’t be trusted. Like He doesn’t actually want what is best for us. Like He is just another person who, as Eve assumed in the Garden all those years ago, might hold out on us. "], image: "../images/Holier-Than-Thou_Jackie-Hill-Perry-christain.jpg" },
        { title: "The Hypocrite World", author: "Sophia Hill", price: 5.9, genre: ['self-help', 'nonfiction'], rating: 4, Summary: ["In 'The Hypocrite World,' a journalist discovers hidden corruption and deception beneath the surface of a seemingly perfect society. As she digs deeper, she confronts ethical dilemmas and shocking truths. "], image: "../images/thehypocriteWorld_sophiaHill_selfHelp.jpg" },
        { title: "The Tiny Dragon", author: "Woo Ling", price: 3.9, genre: [ 'fiction'], rating: 4, Summary: ["In 'The Tiny Dragon,' a small, overlooked dragon sets out on a quest to prove its worth. Along the way, it uncovers hidden strengths and becomes an unexpected hero in a grand adventure. "], image: "../images/theTinyDragon__wooJing_child.webp" },
        
        
       
       
        { title: "Becoming", author: "Michelle Obama", price: 5.99, genre: ["biography",'memoir'], rating: 2, Summary: ["Becoming by Michelle Obama is an inspiring memoir that chronicles the former First Lady's journey from her childhood on the South Side of Chicago to her role in the White House. The book offers an intimate look at her personal growth, public life, and the values that have shaped her."], image: "../images/becoming.jpg" },
        { title: "The Vanishing Half", author: "Brit Bennett", price: 7.99, genre: ["fiction", "literary"], rating: 4.7, Summary: ["The Vanishing Half by Brit Bennett explores the lives of twin sisters whose paths diverge when one decides to live as a Black woman and the other as white. The novel delves into themes of identity, family, and the impact of choices across generations."], image: "../images/vanishing-half.jpeg" },
        { title: "Normal People", author: "Sally Rooney", price: 7.99, genre: ["fiction", "romance"], rating: 4.6, Summary: ["Normal People by Sally Rooney follows the complex relationship between Connell and Marianne, two young adults from a small town in Ireland. The novel captures their evolving connection and personal growth over the years, highlighting themes of love, social class, and intimacy."], image: "../images/normal-people.jpg" },
        { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", price: 11.99, genre: ["nonfiction", 'self-help'], rating: 4.5, Summary: ["The Subtle Art of Not Giving a F*ck by Mark Manson offers a refreshing perspective on living a meaningful life. It challenges conventional self-help advice and emphasizes the importance of focusing on what truly matters by embracing life's challenges and limitations."], image: "../images/subtle-art.jpg" },
        { title: "The Alchemist", author: "Paulo Coelho", price: 7.99, genre: "fiction", rating: 3, Summary: ["The Alchemist by Paulo Coelho is an inspiring tale of Santiago, a young shepherd who dreams of finding treasure. His journey across the desert to discover his Personal Legend is a profound exploration of destiny, dreams, and the pursuit of happiness."], image: "../images/alchemist.png" },
        { title: "Half of a Yellow Sun", author: "Chimamanda Ngozi Adichie", price: 12.99, genre: "fiction", rating: 4.7, Summary: ["Half of a Yellow Sun by Chimamanda Ngozi Adichie provides a powerful narrative of the Nigerian Civil War through the lives of its characters. The novel intertwines personal and political struggles, offering a poignant depiction of the impact of war on individual lives and society."], image: "../images/half-yellow-sun.jpg" },
        { title: "Americanah", author: "Chimamanda Ngozi Adichie", price: 14.99, genre: "fiction", rating: 4.8, Summary: ["Americanah by Chimamanda Ngozi Adichie explores the journey of Ifemelu, a Nigerian woman who moves to the United States for college and experiences the complexities of race, identity, and belonging. The novel offers insightful commentary on cultural differences and self-discovery."], image: "../images/americanah.jpg" },
        { title: "The Fisherman", author: "Chigozie Obioma", price: 9.99, genre: "fiction", rating: 4.6, Summary: ["The Fishermen by Chigozie Obioma tells the haunting story of four brothers in Nigeria whose lives are changed by a prophecy. The novel is a blend of magical realism and family drama, offering a unique and impactful narrative on fate and family dynamics."], image: "../images/fishermen.jpeg" },
        { title: "Things Fall Apart", author: "Chinua Achebe", price: 11.99, genre: "classic", rating: 4.9, Summary: ["Things Fall Apart by Chinua Achebe is a seminal work in African literature, depicting the life of Okonkwo, a respected leader in a pre-colonial Nigerian village. The novel explores the impact of colonialism and cultural change on traditional societies."], image: "../images/things-fall-apart.jpg" },
        { title: "Purple Hibiscus", author: "Chimamanda Ngozi Adichie", price: 15.99, genre: "fiction", rating: 4.7, Summary: ["Purple Hibiscus by Chimamanda Ngozi Adichie is a compelling family drama set in Nigeria. It focuses on the life of Kambili and her family, revealing the tension between a strict, authoritarian father and the struggle for personal freedom and identity."], image: "../images/purple-hibiscus.jpg" },
        { title: "Glory", author: "NoViolet Bulawayo", price: 6.99, genre: ["fiction", "nonfiction"], rating: 4.5, Summary: ["Glory by NoViolet Bulawayo is a striking debut novel that uses allegory to address contemporary Zimbabwean politics and history. Through the lens of a fictional animal society, the novel critiques power and corruption in a powerful and imaginative way."], image: "../images/noviolet-bulawayo.jpg" },
        { title: "Born a Crime", author: "Trevor Noah", price: 9.99, genre: "memoir", rating: 4.8, Summary: ["Born a Crime by Trevor Noah is a humorous and poignant memoir about growing up in South Africa under apartheid. Noah shares his experiences with wit and insight, exploring themes of identity, resilience, and the challenges of his upbringing."], image: "../images/born-a-crime.jpg" },
        { title: "The Joys of Motherhood", author: "Buchi Emecheta", price: 14.49, genre: "nonfiction", rating: 4.6, Summary: ["The Joys of Motherhood by Buchi Emecheta is a powerful portrayal of motherhood in Nigeria. The novel follows the life of Nnu Ego, a woman struggling with societal expectations and personal aspirations, offering a candid and impactful view of her experiences."], image: "../images/joys-motherhood.jpg" },
        { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", price: 14.99, genre: "nonfiction", rating: 4.6, Summary: ["Sapiens by Yuval Noah Harari explores the history of humanity from the emergence of Homo sapiens in the Stone Age to the present. The book examines how human societies have evolved and how cultural, economic, and scientific developments have shaped the modern world."], image: "../images/sapiens.jpg" },
        { title: "When Breath Becomes Air", author: "Paul Kalanithi", price: 6.99, genre: "memoir", rating: 4.7, Summary: ["When Breath Becomes Air by Paul Kalanithi is a poignant memoir by a neurosurgeon diagnosed with terminal cancer. The book reflects on his transition from doctor to patient and explores themes of mortality, the meaning of life, and the intersection of medicine and personal experience."], image: "../images/when-breath-becomes-air.jpg" },
        { title: "Gone Girl", author: "Gillian Flynn", price: 4.99, genre: "thriller", rating: 4.2, Summary: ["Gone Girl by Gillian Flynn is a psychological thriller about a woman who goes missing on her fifth wedding anniversary, and the subsequent media frenzy and police investigation that ensue. The novel delves into the complexities of marriage, deception, and the search for truth."], image: "../images/gone-girl.jfif" },
        { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", price: 8.49, genre: "thriller", rating: 4.4, Summary: ["The Girl with the Dragon Tattoo by Stieg Larsson is a gripping thriller that follows journalist Mikael Blomkvist and hacker Lisbeth Salander as they investigate a decades-old disappearance in Sweden. The novel combines elements of mystery, crime, and intrigue with a complex, suspenseful plot."], image: "../images/girl-with-dragon-tattoo.jpg" },
        { title: "Behold the Dreamers", author: "Imbolo Mbue", price: 4.9, genre: "fiction", rating: 4.7, Summary: ["Behold the Dreamers by Imbolo Mbue is a compelling novel that examines the lives of two families in New York City—one wealthy and one struggling. The story provides a poignant look at immigration, ambition, and the pursuit of the American Dream."], image: "../images/behold-dreamers.jpg" },
        { title: "Daring Greatly", author: "Brené Brown", price: 16.99, genre: "self-help", rating: 4.8, Summary: ["Daring Greatly by Brené Brown explores the power of vulnerability and the importance of embracing imperfection. Brown argues that true courage involves being open to risk and vulnerability, and she provides strategies for cultivating meaningful connections and a resilient mindset."], image: "../images/daring-greatly.jpg" },
        { title: "Grit", author: "Angela Duckworth", price: 3.99, genre: "self-help", rating: 4.6, Summary: ["Grit by Angela Duckworth delves into the concept of grit—passion and perseverance for long-term goals. Duckworth combines research with personal anecdotes to explain how grit can be developed and how it contributes to success and achievement in various areas of life."], image: "../images/grit.jpeg" },
        { title: "The Power of Now", author: "Eckhart Tolle", price: 14.99, genre: "self-help", rating: 4.7, Summary: ["The Power of Now by Eckhart Tolle focuses on the significance of living in the present moment. Tolle provides insights and practices for overcoming the distractions of the mind and achieving a state of presence, which he argues is key to experiencing inner peace and fulfillment."], image: "../images/power-of-now.jpg" },
        { title: "For God, country and Coca-Cola", author: "Pendergrast M", price: 9.32, genre: ['nonfiction', 'historical'], rating: 4.7, Summary: [' The unauthorized history of the great American soft drink and the company that makes it. From its origins as a patent medicine in Reconstruction Atlanta through its rise as the dominant consumer beverage of the American century, the story of Coke is as unique, tasty, and effervescent as the drink itself. With vivid portraits of the entrepreneurs who founded the company'], image: "../images/forGodLoveAndCountry_nonFic.jpg" },

    ];

let currentPage = 1;
const booksPerPage = 8;

function displayBooks(filteredBooks) {
    const bookGrid = document.getElementById('bookGrid');
    bookGrid.innerHTML = '';

    if (filteredBooks.length === 0) {
        bookGrid.innerHTML = '<p class="no-books-message">No book found.</p>';
        return;
    }
    //for randomizing my books
    for (let i = filteredBooks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredBooks[i], filteredBooks[j]] = [filteredBooks[j], filteredBooks[i]];
    }
    const start = (currentPage - 1) * booksPerPage;
    const end = start + booksPerPage;
    const paginatedBooks = filteredBooks.slice(start, end);

    if (paginatedBooks.length === 0) {
        bookGrid.innerHTML = '<p class="no-books-message">No more books found.</p>';
        return;
    }

    paginatedBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';

        bookItem.innerHTML = `
        <img src="${book.image}" alt="${book.title} by ${book.author}" class="cart-book-image">
        <h3 class="book-title">${book.title}</h3>
        <p class="book-author">${book.author}</p>
        <p class="book-price">₦${(book.price * 1000).toFixed(2)}</p>
        <div class="book-rating">${'★'.repeat(Math.floor(book.rating))}${'☆'.repeat(5 - Math.floor(book.rating))}</div>
        <div class="card_btn text-center">
        <button class="add-to-cart">Add to Cart</button>
        <a class="more-info-link more_btn">More Info</a>
        </div>
    `;

        const addToCartButton = bookItem.querySelector('.add-to-cart');
        addToCartButton.addEventListener('click', () => addToCart(book));

        const moreInfoButton = bookItem.querySelector('.more-info-link');
        moreInfoButton.addEventListener('click', () => showModal(book));

        bookGrid.appendChild(bookItem);
    });
}

function showModal(book) {
    const modalTitle = document.getElementById('bookModalLabel');
    const modalBody = document.querySelector('#bookModal .modal-body');
    const addToCartButton = document.getElementById('modalAddToCartButton');

    modalTitle.textContent = book.title;
    modalBody.innerHTML = `
    <img src="${book.image}" alt="${book.title}" class="img-fluid mb-3">
    <p><strong>Author:</strong> ${book.author}</p>
    <p><strong>Price:</strong> ₦${(book.price * 1000).toFixed(2)}</p>
    <p class="modal_genre"><strong>Genre:</strong> ${book.genre}</p>
    <p><strong>Rating:</strong> ${'★'.repeat(Math.floor(book.rating))}${'☆'.repeat(5 - Math.floor(book.rating))}</p>
    <p><strong>Summary:</strong></p>
    <ul>
        ${book.Summary.map(Summary => `<li>${Summary}</li>`).join('')}
    </ul>
`;
    addToCartButton.onclick = () => addToCart(book);

    const modal = new bootstrap.Modal(document.getElementById('bookModal'));
    modal.show();
}

function addToCart(book) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(book);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    showToast(`${book.title} has been added to your cart !!.`);
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = "show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}

function applyFilters() {
    const genre = document.getElementById('genreFilter').value;
    const price = document.getElementById('priceFilter').value;
    const rating = document.getElementById('ratingFilter').value;

    let filteredBooks = books;

    // Genre filter
    if (genre) {
        filteredBooks = filteredBooks.filter((book) =>
            (Array.isArray(book.genre) ? book.genre : [book.genre]).includes(genre)
        );
    }

    // Price filter
    if (price) {
        filteredBooks = filteredBooks.filter(book => {
            switch (price) {
                case 'under_5k': return book.price < 5;
                case '5k_to_10k': return book.price >= 5 && book.price <= 10;
                case 'over_10k': return book.price > 10;
                default: return true;
            }
        });
    }

    // Rating filter
    if (rating) {
        const minRating = parseFloat(rating);
        filteredBooks = filteredBooks.filter(book => book.rating >= minRating);
    }

    displayBooks(filteredBooks);
}


function applySearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query));
    displayBooks(filteredBooks);


}
document.getElementById('searchInput').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        applySearch();
    }
});
function changePage(direction) {
    const totalPages = Math.ceil(books.length / booksPerPage);
    if (direction === 1 && currentPage < totalPages) {
        currentPage++;
    } else if (direction === -1 && currentPage > 1) {
        currentPage--;
    }
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    applyFilters();
}


applyFilters();
