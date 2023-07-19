var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " Fall 2023 Edition   http:\/\/ringswithinquiry.org  http:\/\/ringswithinquiry.org   copyright  "
},
{
  "id": "Sec-Introduction",
  "level": "1",
  "url": "Sec-Introduction.html",
  "type": "Preface",
  "number": "",
  "title": "Introduction",
  "body": " Introduction    In , the author defines a purely structural property as one that can be defined wholly in terms of the concepts same and different, and part and whole (along with purely logical concepts). This definition and its reference to parts and wholes calls to mind the history of the word algebra itself, which comes from the Arabic al-jabr , literally meaning the reunion of broken parts . One of the concepts fundamental to the historical development of algebra is the notion of factorization ; closely related questions that have driven the development of algebra over the centuries are: when does a polynomial equation have solutions in a particular number system, and is there a systematic way to find them?  The goal of this book is to explore the idea of factorization from an abstract perspective. In , we develop our foundations in the integers. Much of this chapter will be familiar to students who have had a first course in number theory, but we are especially concerned with results that preview the structural questions we'll investigate in more abstract settings.  In , we begin the process that so defines modern mathematics: abstraction. We ask: from the point of view of algebra, what properties of the integers are really important? And then we study those. We find that they are also held by several other familiar collections of numbers and algebraic objects, and then study those objects in increasing depth.   begins with an exploration of factorization properties of polynomials in particular. We then precisely describe what we mean by unique factorization before demonstrating that every Euclidean domain possesses the unique factorization property. We conclude with a brief exploration of the ways in which systems of numbers and polynomials can fail to possess the unique factorization property.  Finally, in , we explore the concept of ideals in general, and use them to build new rings and study properties of homomorphisms.  Throughout this book, we will walk in the realms of abstraction, and catch glimpses of the beauty and incredible power of this perspective on mathematics.   J. Franklin, An Aristotelian Realist Philosophy of Mathematics: Mathematics as the Science of Quantity and Structure , Palgrave Macmillan UK, 2014   "
},
{
  "id": "Sec-NoteToStudents",
  "level": "1",
  "url": "Sec-NoteToStudents.html",
  "type": "Preface",
  "number": "",
  "title": "A Note to Students",
  "body": " A Note to Students  Welcome! We are so glad you are here.  This book was written in response to a bit of student feedback from one of the author's (Janssen) first time teaching his institution's introduction to abstract algebra. In short, the feedback was: I am a future teacher, and I do not know why I had to take this course . The criticism was fair; much of what we had covered that semester did not look like what one typically thinks of as algebra , yet it definitely was. In the intervening years, we set out to rethink the way we introduce students to this beautiful subject, and subsequently developed this free resource to do so.  The focus of the first three chapters is factorization , the ability to write certain objects (e.g., numbers, polynomials) as a product of simpler objects (such as prime numbers). This is something you have likely been doing for several years, but we have generally taken it as an article of faith that this can be done in a unique way. The first three chapters of this work has the goal of uncovering structural conditions sufficient to guarantee something like the unique factorization into primes that we know and love from the integers. The fourth chapter is a coda that allows for a deeper exploration of our main objects of interest (rings), as well as functions that relate these objects to one another.  This book was written with the belief that the best way to learn mathematics is to do mathematics. Thus, there are vanishingly few worked examples or proved theorems. Instead, you will provide the proofs and solutions to exercises. It is possible, if you look hard enough, to find some of the answers elsewhere on the internet. I implore you to resist the urge to do so. You will learn much more by struggling with a problem, even if you do not ultimately solve it, than you will by searching for an answer after a few minutes of toying with a problem. The rewards of your struggle will be deep and long-lasting.  Let's begin.   "
},
{
  "id": "Sec-NoteToInstructors",
  "level": "1",
  "url": "Sec-NoteToInstructors.html",
  "type": "Preface",
  "number": "",
  "title": "A Note to Instructors",
  "body": " A Note to Instructors  Welcome! Thank you for considering this text; it won't be for everyone, as strong opinions informed its creation. The strongest are (a) that students learn math best by doing it, and (b) that students especially pre-service teachers more naturally learn modern algebra by encountering rings first.  Pedagogically, these notes fall under the big tent of inquiry-based learning (IBL). Broadly, there are several types of statements you'll find as you read these notes.    Theorems : A numbered theorem is a statement that students are expected to prove for themselves. The authors generally assign 3 6 numbered theorems (or exercises, or lemmas) for each class meeting, with students expected to present their work during the next class. These presentations and the ensuing discussions form the regular work of the class. Students are not expected to prove unnumbered theorems. The unnumbered theorems unify nearby numbered theorems (such as stating an existence theorem and uniqueness theorem as a single result), or are otherwise too technical or complicated to be illuminating. Nonetheless, they are generally important results of which students should be aware.     Lemmas : There are a few lemmas in the notes. As a rule, these lemmas pull out a step from nearby theorems that might be too big to reasonably expect students to take by themselves. If you would like to suggest additional lemmas, feel free to get in touch with the authors.     Exercises : The exercises are generally computational in nature, and presage an upcoming generalization (or reinforce a recent theorem). They are generally labeled as Activity , Exploration , or Investigation . As such, more than a correct numerical answer is needed for a good solution to an exercise.     Challenges : There are a few (unnumbered) challenge problems in the text. These problems may be assigned or they may not, but they are generally difficult and their omission will not disrupt the flow of the text. Students may be interested merely in knowing their statements (e.g., is not a PID).     We begin with a brief overview of some results from elementary number theory regarding divisibility and primes, and introduce modular arithmetic. Other than induction, no proof techniques are explicitly discussed. It is assumed that students using these notes have had an introduction to proofs.  Brief attention is paid to fields before we dive in to rings. Other than mentioning their existence, no attention is given to noncommutative rings. Rings and ideals are developed with an eye toward eventually proving that every Euclidean domain is a unique factorization domain. We briefly explore nonunique factorization (though this could be done in outside homework, if desired) before turning to an exploration of homomorphisms and ideals in general.  As of this writing (July 2020), groups are not covered in this book. Depending on personal preference, with the time left at the end of the semester (often approximately 1 3 weeks, depending on your class's pace), you could present an introduction to groups directly to your students, or use freely available IBL material from the Journal of Inquiry-Based Learning in Mathematics .  The book has been used to carry a full semester course several times at Dordt University, Morningside College, and Grand Valley State University Future plans for the text include:  An expanded treatment of fields, with an emphasis on extensions of (and possible introduction to groups via permutations of roots of polynomials).  Additional optional end-of-section exercises.  Integration of SageMath cells to aid computation where appropriate.  PDF and HTML versions of both the student and instructor versions . These are available! Sort of. No HTML instructor version yet, but a PDF of the student version is now available.  Low-cost print copies of the student version . Coming soon!  There is no planned timeline for any of these projects. If you are interested in helping make one of these happen, please email me (Mike) and let me know! Or, if you just want to let me know that you've found the text useful, that would also be welcome news. And of course, if you find any typos or mistakes, I would love to know that as well.  "
},
{
  "id": "Sec-Versions",
  "level": "1",
  "url": "Sec-Versions.html",
  "type": "Preface",
  "number": "",
  "title": "Versions of this text",
  "body": " Versions of this text  The primary version of this text is the HTML version, available at http:\/\/ringswithinquiry.org . Frankly, it is the easiest to update in case of a quick fix. Other available editions are:   A PDF of the student version .  A PDF of the instructor version; email Mike Janssen to request it.  A low-cost print version from Amazon. (Coming soon!)   "
},
{
  "id": "acknowledgement-1",
  "level": "1",
  "url": "acknowledgement-1.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " There are several people we wish to thank. In no particular order:  David Farmer, for handling the initial conversion of the code to PreTeXt.  Mitch Keller, for his help with PreTeXt (especially creating the Student Version of the book) and for being willing to take a chance using this book for his Fall 2019 modern algebra course at Morningside College.  The Network of IBL Communities (and NSF-DUE #1925188) and the UNO STEM TRAIL Center for supporting the collaboration with Mitch Keller.  Rob Beezer and the PreTeXt team for creating this wonderful authoring language.  And of course, our friends, family, and colleagues for their support of this project.  "
},
{
  "id": "SubSec-WellOrdering",
  "level": "1",
  "url": "SubSec-WellOrdering.html",
  "type": "Section",
  "number": "1.1",
  "title": "Induction and Well-Ordering",
  "body": " Induction and Well-Ordering   Guiding Questions   In this section, we'll seek to answer the questions:  What is the Well-Ordering Principle?  What is mathematical induction, and how can we use it to prove statements about ?       In this section we will assume the basic algebraic\/arithmetic properties of the integers such as closure under addition, subtraction, and multiplication, most of which we will formalize via axioms in subsequent sections. formalizes the familiar notion that nonempty subsets of the positive integers have a smallest element, which will be used repeatedly throughout the text. We then explore a closely related idea, mathematical induction, via an example and exercises.      natural numbers  The collection of natural numbers is denoted by , and is the set .  By we mean the set .    In some sense, the fundamental properties of are (a) there is a smallest natural number, and (b) there is always a next natural number In fact, one can build a model of with set theory and the Peano axioms, which utilize the notion of a successor --the next natural number.) . A consequence of the Peano postulates is the well-ordering principle , which we state as an axiom.   Well-Ordering Principle    Well-Ordering Principle Every nonempty subset of contains a least (smallest) element under the usual ordering, Our word choice is suggestive. In fact, other orderings do exist, and while the set of nonnegative real numbers does not satisfy the well-ordering principle under the usual ordering , the Well Ordering Axiom asserts that there exists a well ordering on any set, including . Accepting this axiom is equivalent to accepting the axiom of choice . .    The Well-Ordering Principle is useful for producing smallest elements of nonempty subsets defined to have certain properties, as the following example demonstrates.    In this exploration, we investigate polynomials with real coefficients, as well as their degrees. We will define these terms more formally in , but for now you may use your intuition from previous courses in algebra.  Let be the set of all polynomials in the variable with real coefficients such that and .   Give an example of an and .  Let be the set of possible degrees of polynomials in . Show that and .  Apply the Well-Ordering Principle to argue that has a least element. To what does this correspond in ?      Examples vary, but and suffice.  Since , we see that . Furthermore, the zero polynomial is not in , so the degrees of polynomials in are all nonnegative integers. Thus, .  We see that meets the conditions of the well-ordering principle, and so it has a least element. This least element is the degree of the polynomial of least degree satisfying and .     We will use this principle throughout the text, next in .    A suspect use of the Well-Ordering Principle.      integers  The set of integers consists of the positive and negative natural numbers, together with zero, and is denoted by : .     Mathematical Induction  induction   Let be a statement about the natural number Sample statements could include is really interesting or is even . . Let be such that the statement is true (the base case ), and suppose there is an such that for all satisfying , is true (the inductive hypothesis ). Then is true, and thus is true for all (the inductive step ).    Mathematical induction is like climbing an infinite staircase. The base case tells us that we can take a first step on the staircase ( ). In the inductive hypothesis , we assume we can take all the steps up to a certain height ( ). In the inductive step , we prove that this allows us to take the st step.  Thus, if we can take step , we can (by the inductive step) take step . And since we can take step , we can (again by the inductive step) take step . And so on, forever (or, if the notion of actual infinity makes you uncomfortable, as far as we want to go).    Example  For all , .   Proof. Base case: When , the equation is true.   Inductive Hypothesis: Assume that there exists a such that whenever , the equation is true.   Inductive Step: Our goal is to show that is true. That is, we wish to establish that .  We begin on the left-hand side of , where we may apply the inductive hypothesis to see that . Through the use of straightforward algebra, the right-hand side becomes .  Putting and together, we obtain , which is exactly the goal we stated in .   We conclude with opportunities to practice induction.    For all , .    The statement is obviously true when .  Now suppose that and . Then .       Prove that the sum of the first cubes is . That is,     We wish to prove that    Base Case: When , the theorem clearly holds.   Inductive Hypothesis: Assume for all that we have    Inductive Step: We wish to prove that We apply to obtain The theorem is proved.     (Bernoulli's Inequality)  Given a real number , for all .   When the inequality becomes , which is clearly true.  Assume . Then .     "
},
{
  "id": "def_naturalnumbers",
  "level": "2",
  "url": "SubSec-WellOrdering.html#def_naturalnumbers",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "   natural numbers  The collection of natural numbers is denoted by , and is the set .  By we mean the set .   "
},
{
  "id": "axiom_wellordering",
  "level": "2",
  "url": "SubSec-WellOrdering.html#axiom_wellordering",
  "type": "Axiom",
  "number": "1.1.2",
  "title": "Well-Ordering Principle.",
  "body": " Well-Ordering Principle    Well-Ordering Principle Every nonempty subset of contains a least (smallest) element under the usual ordering, Our word choice is suggestive. In fact, other orderings do exist, and while the set of nonnegative real numbers does not satisfy the well-ordering principle under the usual ordering , the Well Ordering Axiom asserts that there exists a well ordering on any set, including . Accepting this axiom is equivalent to accepting the axiom of choice . .   "
},
{
  "id": "exploration-1",
  "level": "2",
  "url": "SubSec-WellOrdering.html#exploration-1",
  "type": "Exploration",
  "number": "1.1.3",
  "title": "",
  "body": "  In this exploration, we investigate polynomials with real coefficients, as well as their degrees. We will define these terms more formally in , but for now you may use your intuition from previous courses in algebra.  Let be the set of all polynomials in the variable with real coefficients such that and .   Give an example of an and .  Let be the set of possible degrees of polynomials in . Show that and .  Apply the Well-Ordering Principle to argue that has a least element. To what does this correspond in ?      Examples vary, but and suffice.  Since , we see that . Furthermore, the zero polynomial is not in , so the degrees of polynomials in are all nonnegative integers. Thus, .  We see that meets the conditions of the well-ordering principle, and so it has a least element. This least element is the degree of the polynomial of least degree satisfying and .    "
},
{
  "id": "figure-1",
  "level": "2",
  "url": "SubSec-WellOrdering.html#figure-1",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": "  A suspect use of the Well-Ordering Principle.  "
},
{
  "id": "def_integers",
  "level": "2",
  "url": "SubSec-WellOrdering.html#def_integers",
  "type": "Definition",
  "number": "1.1.5",
  "title": "",
  "body": "   integers  The set of integers consists of the positive and negative natural numbers, together with zero, and is denoted by : .   "
},
{
  "id": "theorem-1",
  "level": "2",
  "url": "SubSec-WellOrdering.html#theorem-1",
  "type": "Theorem",
  "number": "1.1.6",
  "title": "",
  "body": "  For all , .    The statement is obviously true when .  Now suppose that and . Then .   "
},
{
  "id": "theorem-2",
  "level": "2",
  "url": "SubSec-WellOrdering.html#theorem-2",
  "type": "Theorem",
  "number": "1.1.7",
  "title": "",
  "body": "   Prove that the sum of the first cubes is . That is,     We wish to prove that    Base Case: When , the theorem clearly holds.   Inductive Hypothesis: Assume for all that we have    Inductive Step: We wish to prove that We apply to obtain The theorem is proved.   "
},
{
  "id": "theorem-3",
  "level": "2",
  "url": "SubSec-WellOrdering.html#theorem-3",
  "type": "Theorem",
  "number": "1.1.8",
  "title": "(Bernoulli's Inequality).",
  "body": " (Bernoulli's Inequality)  Given a real number , for all .   When the inequality becomes , which is clearly true.  Assume . Then .   "
},
{
  "id": "SubSec-Divisibility-in-the-Integers",
  "level": "1",
  "url": "SubSec-Divisibility-in-the-Integers.html",
  "type": "Section",
  "number": "1.2",
  "title": "Divisibility and GCDs in the Integers",
  "body": " Divisibility and GCDs in the Integers   Guiding Questions   In this section, we'll seek to answer the questions:  What does it mean for one integer to divide another?  What properties does divisibility enjoy in the integers?  What is the greatest common divisor of two integers?  How can we compute the greatest common divisor of two integers?       Divisibility and the Division Algorithm  In this section, we begin to explore some of the arithmetic and algebraic properties of . We focus specifically on the divisibility and factorization properties of the integers, as these are the main focus of the text as a whole. One of the primary goals of this section is to formalize definitions that you are likely already familiar with and of which you have an intuitive understanding. At first, this might seem to unnecessarily complicate matters. However, it will become clear as we move forward that formal mathematical language and notation are necessary to extend these properties to a more abstract setting. We begin with a familiar notion.    divides (integers)  factor (integers)  Let . We say that  divides  , and write , if there is an integer such that . In this case, say that and are factors of . If no such exists, we write .    Note that the symbol is a verb ; it is therefore correct to say, e.g., , as 2 does divide 4. However, it is an abuse of notation to say that . Instead, we likely mean or (though we will not deal in fractions just yet).    Determine whether if:    ,      ,      ,      ,    Comment briefly on the results of this investigation. What did you notice? What do you still wonder?    TBD.    We next collect several standard results about divisibility in which will be used extensively in the remainder of this text.    Let . If and , then .    Our hypothesis means that there exist integers and such that and . Then . Let , and observe that is an integer; then , so .      Let . If , then .    Our hypotheses means there is an integer for which . Then . We observe that is an integer, so , and therefore .      Consider the following partial converse to : If with , must or ? Supply a proof or give a counterexample.    The converse is false: , but and .      Let . If and divides any two of , then divides the third.    We consider two cases.   Case 1: Assume without loss of generality that and . Then there are integers such that and . We observe that , so .   Case 2: Assume that and , so there are such that and . Then , so .      Formulate a conjecture akin to the previous theorems about divisibility in , and then prove it.    Answers vary.    As we saw above, not all pairs of integers satisfy or . However, our experience in elementary mathematics does apply: there is often something left over (a remainder) . The following theorem formalizes this idea for .   The Division Algorithm for  Division Algorithm ( )   Let . Then there exist unique integers such that , where .    There are two parts to this theorem. First, you must establish that and exist. This is best done via . If you're stuck on that, check the second hint.  Once you have established that and exist, show that they are unique but assuming and , where both satisfy the conditions of the theorem. Argue that and .    Let .    First, assume that . Then and are sufficient. If , then and will work.  Now, assume that . Then the set is nonempty, as . By , has a least element, which we will call . Let be such that ; then .  To finish the proof, it is enough to show that this choice of satisfies . Observe that , so . If , then . Since , this is a contradiction to the assumption that was the largest element of . Thus, , i.e., .  Let be such that and . We see that , so , so . If , we are done.  Otherwise, is a nonzero multiple of . If , then , a contradiction. Similarly, if , write , and a symmetric argument leads to a contradiction.  Thus, , so , and since , , i.e., .     Warning!  This theorem has two parts: existence and uniqueness. Do not try to prove them both at the same time.   Unsurprisingly, the Division Algorithm also holds in , though the existence of negative integers requires a careful restatement.    The Division Algorithm for  Division Algorithm ( )   Let with . Then there exist unique integers such that , where .    Consider cases, and apply wherever possible.    TBD.      Greatest Common Divisors  We next turn to another familiar property of the integers: the existence of greatest common divisors.   greatest common divisor ( )   Let such that and are not both 0. A greatest common divisor of and , denoted , is a natural number satisfying    and     if and and , then .     If , we say that and are relatively prime or coprime . This formalizes the idea of greatest common factors that is introduced around sixth grade .     This definition may be different than the one you are used to, which likely stated that rather than condition 2 in . It can be proved using the order relations of that the definition given here is equivalent to that one. However, we will prefer this definition, as it generalizes naturally to other number systems which do not have an order relation like .    Compute if:    ,      ,      ,    Now that you have had a bit of practice computing gcds, describe your method for finding them in a sentence or two.    TBD.    How did you answer the last question in ? If you are like the authors' classes, the answers probably varied, though you have referred at some point to a \"prime\" ( whatever those are ), or possibly some other ad hoc method for finding the gcd. Most such methods rely in some form on our ability to factor integers. However, the problem of factoring arbitrary integers is actually surprisingly computationally intensive. Thankfully, there is another way to compute , to which we now turn.    Let such that with and not both zero. Then .    Let and . Since and , , and so by definition.  Similarly, since and , , so by definition.  Thus, .      Suppose such that there exists with and and not both zero. Prove or disprove: .   TBD.      (Euclidean Algorithm)  Euclidean Algorithm   Let . Use and to determine an algorithm for computing . How could your method be modified to compute for ?    Let . Write . By Theorem , .  Then, write using the Division algorithm. Observe . Continue until there is a for which , so . Then .      Use the Euclidean algorithm to compute .    We write .  So .    The following identity provides a useful characterization of the greatest common divisor of two integers, not both zero. We will return to this idea several times, even after we have left the familiar realm of the integers.   Bézout's Identity  Bézout's Identity   For any integers and not both 0, there are integers and such that .    Apply to a well-chosen set.    Apply to .    Consider the set . We first show that .  Suppose without loss of generality that , and consider ; then is sufficient to guarantee . If , then is sufficient. Regardless, , and by the Well-Ordering Principle, has a least element, . We claim .  We first show that Use the division algorithm to write , where . We find , and if , , contradicting the status of as the least element of . Thus, , and . By a symmetric proof, .  Suppose then that is a common divisor of and ; write and . Then , whence . Therefore, .    We conclude with an answer to the questions raised by .    Let , and be integers. If and , then .    Suppose . By Theorem , there are integers and such that .  Multiply by to get .  Since by assumption, there is an integer such that , so we have , so .      In this section, we have collected some initial results about divisibility in the integers. We'll next explore the multiplicative building blocks of the integers, the primes, in preparation for a deeper exploration of factorization.   "
},
{
  "id": "definition-3",
  "level": "2",
  "url": "SubSec-Divisibility-in-the-Integers.html#definition-3",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  divides (integers)  factor (integers)  Let . We say that  divides  , and write , if there is an integer such that . In this case, say that and are factors of . If no such exists, we write .   "
},
{
  "id": "investigation-1",
  "level": "2",
  "url": "SubSec-Divisibility-in-the-Integers.html#investigation-1",
  "type": "Investigation",
  "number": "1.2.2",
  "title": "",
  "body": "  Determine whether if:    ,      ,      ,      ,    Comment briefly on the results of this investigation. What did you notice? What do you still wonder?    TBD.   "
},
{
  "id": "theorem-4",
  "level": "2",
  "url": "SubSec-Divisibility-in-the-Integers.html#theorem-4",
  "type": "Theorem",
  "number": "1.2.3",
  "title": "",
  "body": "  Let . If and , then .    Our hypothesis means that there exist integers and such that and . Then . Let , and observe that is an integer; then , so .   "
},
{
  "id": "thm-divideproduct",
  "level": "2",
  "url": "SubSec-Divisibility-in-the-Integers.html#thm-divideproduct",
  "type": "Theorem",
  "number": "1.2.4",
  "title": "",
  "body": "  Let . If , then .    Our hypotheses means there is an integer for which . Then . We observe that is an integer, so , and therefore .   "
},
{
  "id": "invest-divideproduct",
  "level": "2",
  "url": "SubSec-Divisibility-in-the-Integers.html#invest-divideproduct",
  "type": "Investigation",
  "number": "1.2.5",
  "title": "",
  "body": "  Consider the following partial converse to : If with , must or ? Supply a proof or give a counterexample.    The converse is false: , but and .   "
},
{
  "id": "theorem_23lemmageneralization",
  "level": "2",
  "url": "SubSec-Divisibility-in-the-Integers.html#theorem_23lemmageneralization",
  "type": "Theorem",
  "number": "1.2.6",
  "title": "",
  "body": "  Let . If and divides any two of , then divides the third.    We consider two cases.   Case 1: Assume without loss of generality that and . Then there are integers such that and . We observe that , so .   Case 2: Assume that and , so there are such that and . Then , so .   "
},
{
  "id": "investigation-3",
  "level": "2",
  "url": "SubSec-Divisibility-in-the-Integers.html#investigation-3",
  "type": "Investigation",
  "number": "1.2.7",
  "title": "",
  "body": "  Formulate a conjecture akin to the previous theorems about divisibility in , and then prove it.    Answers vary.   "
},
{
  "id": "thm_divalg",
  "level": "2",
  "url": "SubSec-Divisibility-in-the-Integers.html#thm_divalg",
  "type": "Theorem",
  "number": "1.2.8",
  "title": "The Division Algorithm for <span class=\"process-math\">\\(\\N\\)<\/span>.",
  "body": " The Division Algorithm for  Division Algorithm ( )   Let . Then there exist unique integers such that , where .    There are two parts to this theorem. First, you must establish that and exist. This is best done via . If you're stuck on that, check the second hint.  Once you have established that and exist, show that they are unique but assuming and , where both satisfy the conditions of the theorem. Argue that and .    Let .    First, assume that . Then and are sufficient. If , then and will work.  Now, assume that . Then the set is nonempty, as . By , has a least element, which we will call . Let be such that ; then .  To finish the proof, it is enough to show that this choice of satisfies . Observe that , so . If , then . Since , this is a contradiction to the assumption that was the largest element of . Thus, , i.e., .  Let be such that and . We see that , so , so . If , we are done.  Otherwise, is a nonzero multiple of . If , then , a contradiction. Similarly, if , write , and a symmetric argument leads to a contradiction.  Thus, , so , and since , , i.e., .   "
},
{
  "id": "corollary-1",
  "level": "2",
  "url": "SubSec-Divisibility-in-the-Integers.html#corollary-1",
  "type": "Corollary",
  "number": "1.2.9",
  "title": "The Division Algorithm for <span class=\"process-math\">\\(\\Z\\)<\/span>.",
  "body": " The Division Algorithm for  Division Algorithm ( )   Let with . Then there exist unique integers such that , where .    Consider cases, and apply wherever possible.    TBD.   "
},
{
  "id": "gcd-definition",
  "level": "2",
  "url": "SubSec-Divisibility-in-the-Integers.html#gcd-definition",
  "type": "Definition",
  "number": "1.2.10",
  "title": "",
  "body": " greatest common divisor ( )   Let such that and are not both 0. A greatest common divisor of and , denoted , is a natural number satisfying    and     if and and , then .     If , we say that and are relatively prime or coprime . This formalizes the idea of greatest common factors that is introduced around sixth grade .    "
},
{
  "id": "act-gcdcomputations",
  "level": "2",
  "url": "SubSec-Divisibility-in-the-Integers.html#act-gcdcomputations",
  "type": "Activity",
  "number": "1.2.11",
  "title": "",
  "body": "  Compute if:    ,      ,      ,    Now that you have had a bit of practice computing gcds, describe your method for finding them in a sentence or two.    TBD.   "
},
{
  "id": "theorem-8",
  "level": "2",
  "url": "SubSec-Divisibility-in-the-Integers.html#theorem-8",
  "type": "Theorem",
  "number": "1.2.12",
  "title": "",
  "body": "  Let such that with and not both zero. Then .    Let and . Since and , , and so by definition.  Similarly, since and , , so by definition.  Thus, .   "
},
{
  "id": "invest_gcdremainder",
  "level": "2",
  "url": "SubSec-Divisibility-in-the-Integers.html#invest_gcdremainder",
  "type": "Investigation",
  "number": "1.2.13",
  "title": "",
  "body": "  Suppose such that there exists with and and not both zero. Prove or disprove: .   TBD.  "
},
{
  "id": "invest-euclid-alg-integers",
  "level": "2",
  "url": "SubSec-Divisibility-in-the-Integers.html#invest-euclid-alg-integers",
  "type": "Investigation",
  "number": "1.2.14",
  "title": "(Euclidean Algorithm).",
  "body": " (Euclidean Algorithm)  Euclidean Algorithm   Let . Use and to determine an algorithm for computing . How could your method be modified to compute for ?    Let . Write . By Theorem , .  Then, write using the Division algorithm. Observe . Continue until there is a for which , so . Then .   "
},
{
  "id": "activity-2",
  "level": "2",
  "url": "SubSec-Divisibility-in-the-Integers.html#activity-2",
  "type": "Activity",
  "number": "1.2.15",
  "title": "",
  "body": "  Use the Euclidean algorithm to compute .    We write .  So .   "
},
{
  "id": "theorem_bezoutint",
  "level": "2",
  "url": "SubSec-Divisibility-in-the-Integers.html#theorem_bezoutint",
  "type": "Theorem",
  "number": "1.2.16",
  "title": "Bézout's Identity.",
  "body": " Bézout's Identity  Bézout's Identity   For any integers and not both 0, there are integers and such that .    Apply to a well-chosen set.    Apply to .    Consider the set . We first show that .  Suppose without loss of generality that , and consider ; then is sufficient to guarantee . If , then is sufficient. Regardless, , and by the Well-Ordering Principle, has a least element, . We claim .  We first show that Use the division algorithm to write , where . We find , and if , , contradicting the status of as the least element of . Thus, , and . By a symmetric proof, .  Suppose then that is a common divisor of and ; write and . Then , whence . Therefore, .   "
},
{
  "id": "theorem_relprimecancel",
  "level": "2",
  "url": "SubSec-Divisibility-in-the-Integers.html#theorem_relprimecancel",
  "type": "Theorem",
  "number": "1.2.17",
  "title": "",
  "body": "  Let , and be integers. If and , then .    Suppose . By Theorem , there are integers and such that .  Multiply by to get .  Since by assumption, there is an integer such that , so we have , so .   "
},
{
  "id": "SubSec-Primes-and-Factorization",
  "level": "1",
  "url": "SubSec-Primes-and-Factorization.html",
  "type": "Section",
  "number": "1.3",
  "title": "Primes and Factorization",
  "body": " Primes and Factorization   Guiding Questions   In this section, we'll seek to answer the questions:  What are primes? What properties do they have?  What does the Fundamental Theorem of Arithmetic say?  Why is the Fundamental Theorem of Arithmetic true?      As described in the Introduction , our main goal is to build a deep structural understanding of the notion of factorization . That is, splitting objects (e.g., numbers, polynomials, matrices) into products of other objects. One of the most familiar examples of this process involves factoring integers into products of primes.    prime (integers)  composite (integers)  Let be a natural number. We say is prime if whenever such that , either or .  A natural number is said to be composite if it is not prime.    This is almost certainly not the definition of prime that you are familiar with from your school days, which likely said something to the effect that a prime is a natural number only divisible by 1 and itself. However, is often more useful than the usual definition. And, as demonstrates, the two notions are equivalent.   Euclid's Lemma   Given any , , is prime if and only if whenever divides , either or .    Let be prime and suppose divides , so for some . By definition, or . If , then , so , and , which means and thus . If , then , so , and , so .  Conversely, assume has the property that whenever an integer exists with , then or . Suppose , so there exists a such that . Note that if , then , and so , and then . If , then by Bézout's Identity there are integers and such that , so we may multiply by to obtain , whence .      Using as a guide, give a biconditional characterization for composite numbers. That is, finish the sentence: A number is composite if and only if ....      A number is composite if and only if there exist natural numbers such that .      How does your definition treat the number 1? The primality of 1 has been the subject of much debate stretching back to the Greeks (most of whom did not consider 1 to be a number). Throughout history, mathematicians have at times viewed 1 as prime, and at other times, not prime. The main argument for the non-primality of 1 is that if 1 were taken to be prime, we would need to word theorems like the Fundamental Theorem of Arithmetic (below) in such a way that only prime factorizations not including 1 can be considered. For, if 1 is prime, we would have to consider, e.g., as three different factorizations of 6 into primes.  However, neither is 1 composite (your definition should rule this out in some way). Instead, we call 1 a unit , which we'll explore more fully in and the following; consequently, the opposite of \"prime\" is not \"composite\", but \"not prime\".     Let such that . Then there is a prime such that .     We proceed by mathematical induction. Note that when , the statement holds.  Assume that there is a such that for all , the statement holds. Consider . If is prime, we are done. If not, then is composite, and by the answer to Question , there are integers such that . By induction, there is a prime such that , so .     Suppose and are primes with . Then .   TBD.   Our first major theorem makes two claims: that positive integers greater than 1 can be factored into products of primes, and that this factorization can happen in only one way. As the semester progresses, we will see other theorems like this one, and catch glimpses of other ways to think about the unique factorization property .   Fundamental Theorem of Arithmetic   Every natural number greater than 1 is either a prime number or it can be expressed as a finite product of prime numbers where the expression is unique up to the order of the factors.    The proof is broken into two parts: existence ( ) and uniqueness ( ).   Fundamental Theorem of Arithmetic Existence Part This approach to the Fundamental Theorem of Arithmetic is adapted from .    Every natural number is either a prime number or it can be expressed as a finite product of prime numbers. That is, for every natural number , there exist primes and natural numbers such that .    Induction!     It is enough to show that, if , we may write , where the 's are not necessarily distinct primes. Then we can collect the common primes and write them with exponent notation.  Note that when , there is such an expression, so let be the least positive integer that fails to be expressed as above. We note that cannot be prime, or it could be expressed as above. Thus, by Theorem 2.1, there is a prime such that , where . Since was the least positive integer that cannot be factored as a product of primes, has a prime factorization. But then so does , a contradiction.     Let and all be primes and let be a natural number such that . Then for some .     We first state a claim that will be useful.   Claim 1: If are primes such that , then .   Proof of Claim 1: Since and both and are prime, by the definition of primality.   Now assume that . If , we're done by Claim 1. If not, the definition of a prime guarantees that . If , we're done by Claim 1. Otherwise, .  Repeating this process, we see that either for some , or . Now the definition of a prime guarantees that or , in which case Claim 1 requires that or .    Fundamental Theorem of Arithmetic Uniqueness Part   Let be a natural number. Let and be sets of primes with if and if . Let and be sets of natural numbers such that .  Then and . That is, the sets of primes are equal but their elements are not necessarily listed in the same order (i.e., may or may not equal ). Moreover, if , then . In other words, if we express the same natural number as a product of distinct primes, then the expressions are identical except for the ordering of the factors.    Argue that the two sets are equal (how do we do that?). Then argue that the exponents must also be equal.     Without loss of generality, assume and . Given a , we know that , which implies that for some by Claim 2 in the proof of Lemma 2.8. Further, Lemma 2.8 implies that , and similarly, given a , for some . Thus, , and by the ordering of the 's and 's, we have , . Therefore, .  Now, assume by way of contradiction, that for some . Without loss of generality, we may assume . Then , which implies that .  Since , we have that , from which for some by Lemma 2.8. This is a contradiction, so for .   Our first major result is in hand: we can factor natural numbers uniquely as a product of primes. Much of the rest of this book seeks to deduce a generalization of this result that relies on structural arithmetic properties enjoyed by and similar objects.   D. Marshall, E. Odell, M. Starbird, Number Theory Through Inquiry , MAA Textbooks, Mathematical Association of America, 2007   "
},
{
  "id": "def-primeinteger",
  "level": "2",
  "url": "SubSec-Primes-and-Factorization.html#def-primeinteger",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "  prime (integers)  composite (integers)  Let be a natural number. We say is prime if whenever such that , either or .  A natural number is said to be composite if it is not prime.   "
},
{
  "id": "theorem_euclidslemma",
  "level": "2",
  "url": "SubSec-Primes-and-Factorization.html#theorem_euclidslemma",
  "type": "Lemma",
  "number": "1.3.2",
  "title": "Euclid's Lemma.",
  "body": " Euclid's Lemma   Given any , , is prime if and only if whenever divides , either or .    Let be prime and suppose divides , so for some . By definition, or . If , then , so , and , which means and thus . If , then , so , and , so .  Conversely, assume has the property that whenever an integer exists with , then or . Suppose , so there exists a such that . Note that if , then , and so , and then . If , then by Bézout's Identity there are integers and such that , so we may multiply by to obtain , whence .   "
},
{
  "id": "question_compositecharacterization",
  "level": "2",
  "url": "SubSec-Primes-and-Factorization.html#question_compositecharacterization",
  "type": "Exploration",
  "number": "1.3.3",
  "title": "",
  "body": "  Using as a guide, give a biconditional characterization for composite numbers. That is, finish the sentence: A number is composite if and only if ....      A number is composite if and only if there exist natural numbers such that .    "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "SubSec-Primes-and-Factorization.html#remark-1",
  "type": "Remark",
  "number": "1.3.4",
  "title": "",
  "body": " How does your definition treat the number 1? The primality of 1 has been the subject of much debate stretching back to the Greeks (most of whom did not consider 1 to be a number). Throughout history, mathematicians have at times viewed 1 as prime, and at other times, not prime. The main argument for the non-primality of 1 is that if 1 were taken to be prime, we would need to word theorems like the Fundamental Theorem of Arithmetic (below) in such a way that only prime factorizations not including 1 can be considered. For, if 1 is prime, we would have to consider, e.g., as three different factorizations of 6 into primes.  However, neither is 1 composite (your definition should rule this out in some way). Instead, we call 1 a unit , which we'll explore more fully in and the following; consequently, the opposite of \"prime\" is not \"composite\", but \"not prime\".  "
},
{
  "id": "theorem-11",
  "level": "2",
  "url": "SubSec-Primes-and-Factorization.html#theorem-11",
  "type": "Theorem",
  "number": "1.3.5",
  "title": "",
  "body": "  Let such that . Then there is a prime such that .   "
},
{
  "id": "proof-13",
  "level": "2",
  "url": "SubSec-Primes-and-Factorization.html#proof-13",
  "type": "Proof",
  "number": "1.3.1",
  "title": "",
  "body": " We proceed by mathematical induction. Note that when , the statement holds.  Assume that there is a such that for all , the statement holds. Consider . If is prime, we are done. If not, then is composite, and by the answer to Question , there are integers such that . By induction, there is a prime such that , so .  "
},
{
  "id": "theorem-12",
  "level": "2",
  "url": "SubSec-Primes-and-Factorization.html#theorem-12",
  "type": "Theorem",
  "number": "1.3.6",
  "title": "",
  "body": "  Suppose and are primes with . Then .   TBD.  "
},
{
  "id": "theorem_FTAexistence",
  "level": "2",
  "url": "SubSec-Primes-and-Factorization.html#theorem_FTAexistence",
  "type": "Theorem",
  "number": "1.3.7",
  "title": "Fundamental Theorem of Arithmetic–Existence Part<a href=\"\" data-knowl=\"\" class=\"id-ref fn-knowl original\" data-refid=\"hk-fn-11\" id=\"fn-11\"><sup> 1 <\/sup><\/a>.",
  "body": " Fundamental Theorem of Arithmetic Existence Part This approach to the Fundamental Theorem of Arithmetic is adapted from .    Every natural number is either a prime number or it can be expressed as a finite product of prime numbers. That is, for every natural number , there exist primes and natural numbers such that .    Induction!   "
},
{
  "id": "proof-15",
  "level": "2",
  "url": "SubSec-Primes-and-Factorization.html#proof-15",
  "type": "Proof",
  "number": "1.3.2",
  "title": "",
  "body": " It is enough to show that, if , we may write , where the 's are not necessarily distinct primes. Then we can collect the common primes and write them with exponent notation.  Note that when , there is such an expression, so let be the least positive integer that fails to be expressed as above. We note that cannot be prime, or it could be expressed as above. Thus, by Theorem 2.1, there is a prime such that , where . Since was the least positive integer that cannot be factored as a product of primes, has a prime factorization. But then so does , a contradiction.  "
},
{
  "id": "lemma-2",
  "level": "2",
  "url": "SubSec-Primes-and-Factorization.html#lemma-2",
  "type": "Lemma",
  "number": "1.3.8",
  "title": "",
  "body": "  Let and all be primes and let be a natural number such that . Then for some .   "
},
{
  "id": "proof-16",
  "level": "2",
  "url": "SubSec-Primes-and-Factorization.html#proof-16",
  "type": "Proof",
  "number": "1.3.3",
  "title": "",
  "body": " We first state a claim that will be useful.   Claim 1: If are primes such that , then .   Proof of Claim 1: Since and both and are prime, by the definition of primality.   Now assume that . If , we're done by Claim 1. If not, the definition of a prime guarantees that . If , we're done by Claim 1. Otherwise, .  Repeating this process, we see that either for some , or . Now the definition of a prime guarantees that or , in which case Claim 1 requires that or .  "
},
{
  "id": "theorem_FTAuniqueness",
  "level": "2",
  "url": "SubSec-Primes-and-Factorization.html#theorem_FTAuniqueness",
  "type": "Theorem",
  "number": "1.3.9",
  "title": "Fundamental Theorem of Arithmetic–Uniqueness Part.",
  "body": " Fundamental Theorem of Arithmetic Uniqueness Part   Let be a natural number. Let and be sets of primes with if and if . Let and be sets of natural numbers such that .  Then and . That is, the sets of primes are equal but their elements are not necessarily listed in the same order (i.e., may or may not equal ). Moreover, if , then . In other words, if we express the same natural number as a product of distinct primes, then the expressions are identical except for the ordering of the factors.    Argue that the two sets are equal (how do we do that?). Then argue that the exponents must also be equal.   "
},
{
  "id": "proof-17",
  "level": "2",
  "url": "SubSec-Primes-and-Factorization.html#proof-17",
  "type": "Proof",
  "number": "1.3.4",
  "title": "",
  "body": " Without loss of generality, assume and . Given a , we know that , which implies that for some by Claim 2 in the proof of Lemma 2.8. Further, Lemma 2.8 implies that , and similarly, given a , for some . Thus, , and by the ordering of the 's and 's, we have , . Therefore, .  Now, assume by way of contradiction, that for some . Without loss of generality, we may assume . Then , which implies that .  Since , we have that , from which for some by Lemma 2.8. This is a contradiction, so for .  "
},
{
  "id": "SubSec-Integers-Mod-m",
  "level": "1",
  "url": "SubSec-Integers-Mod-m.html",
  "type": "Section",
  "number": "1.4",
  "title": "The Integers modulo <span class=\"process-math\">\\(m\\)<\/span>",
  "body": " The Integers modulo   Guiding Questions   In this section, we'll seek to answer the questions:  What are equivalence relations?  What is congruence modulo ?  How does arithmetic in compare to arithmetic in ?      The foundation for our exploration of abstract algebra is nearly complete. We need the basics of one more \"number system\" in order to appreciate the abstract approach developed in subsequent chapters. To build that number system, a brief review of relations and equivalence relations is required. Recall that given sets and , the Cartesian product of with , denoted (\" cross \"), is the set of all possible ordered pairs whose first element is from and second element is from . Symbolically,    relation   Let be a nonempty set. A relation  on is a subset of . If such that , we usually write and say that and are related under .    The notion of a relation as presented above is extremely open-ended. Any subset of ordered pairs of describes a relation on the set . Of course, some relations are more meaningful than others; the branch of mathematics known as order theory studies order relations (such as the familiar ). Our focus will be on equivalence relations , which isolate the important features of .   equivalence relation  equivalence class  equivalence class, representative of   Let be a nonempty set. We say a relation on is an equivalence relation if the following properties hold:    is reflexive : if , then .     is symmetric : if with , then .     is transitive : if with and , then .     Given , the set is called the equivalence class of . Any element is called a representative of the equivalence class.      Prove that has the same birthday as is an equivalence relation on the set of all people.    Given any , clearly has the same birthday as .  Moreover, if such that has the same birthday as , then it is clear that has the same birthday as .  Finally, if such that has the same birthday as and has the same birthday as , then must have the same birthday as .      What other relations can you think of? Write down one example and one non-example of an equivalence relation.      Prove that is not an equivalence relation on .    The relation fails the symmetry condition. As an example, note that , but .    For our purposes, a particularly important equivalence relation is congruence modulo on the set of integers.   congruence modulo   Let and , . We say is congruent to modulo if . We write .      Justify the following congruences.             Given an integer , congruence modulo is an equivalence relation on .    Let . Then , so . Thus, is reflexive.  Let such that . This means that , so there is some such that . Then , so and . Thus, is symmetric.  Finally, let such that and . Then and , so there are integers such that and . Summing these equations yields , so and .     The set of equivalence classes of under the equivalence relation congruence modulo is called the integers modulo , and is denoted (pronounced \"Z mod m\").    List the elements of and .    The equivalence classes of are Since every integer is in one of the above equivalence classes, we know we have found them all.      Let and such that and . Then .    Write and for some . Then , so .      Let and such that and . Then .     Write and for some . Observe .  Thus, and .    well-defined statement   Let be a set and an equivalence relation on . Then a statement about the equivalence classes of is well-defined if the representative of the equivalence class does not matter. That is, whenever , .    The previous exercises justify the following definitions.    Let and . Then the following are well-defined operations on the equivalence classes:    Addition modulo : . The symbol is often used to indicate that we are defining the expression on the left to equal the expression on the right.      Multiplication modulo : .       Most elementary propositions about can be recast as statements about . For instance, in proving you likely proved that if and that . However, as the statements become more complex, repeatedly reshaping statements about as statements about becomes cumbersome and unhelpful. Instead, you are encouraged to become comfortable doing arithmetic modulo or, put another way, arithmetic with the equivalence classes of as defined in .    Without passing back to , find the smallest nonnegative integer representative of the resulting equivalence classes.   in  in  in  in  in    TBD   In the remainder of this section, we investigate fundamental properties of arithmetic in .    Let with and . If , is it true that ? If so, prove it. If not, find an example of when the statement fails to hold.    It is not true. For example, in , , but .      Let , and be integers with and . Then there is some such that .  Conclude that if in that .    We know that , i.e., that . By Theorem , .      Let be prime and such that . Then   there is some such that ; and,    if , .       In , every nonzero equivalence class is represented by an for which . Apply .    "
},
{
  "id": "definition-6",
  "level": "2",
  "url": "SubSec-Integers-Mod-m.html#definition-6",
  "type": "Definition",
  "number": "1.4.1",
  "title": "",
  "body": " relation   Let be a nonempty set. A relation  on is a subset of . If such that , we usually write and say that and are related under .   "
},
{
  "id": "def-eqrel",
  "level": "2",
  "url": "SubSec-Integers-Mod-m.html#def-eqrel",
  "type": "Definition",
  "number": "1.4.2",
  "title": "",
  "body": " equivalence relation  equivalence class  equivalence class, representative of   Let be a nonempty set. We say a relation on is an equivalence relation if the following properties hold:    is reflexive : if , then .     is symmetric : if with , then .     is transitive : if with and , then .     Given , the set is called the equivalence class of . Any element is called a representative of the equivalence class.   "
},
{
  "id": "activity-3",
  "level": "2",
  "url": "SubSec-Integers-Mod-m.html#activity-3",
  "type": "Activity",
  "number": "1.4.3",
  "title": "",
  "body": "  Prove that has the same birthday as is an equivalence relation on the set of all people.    Given any , clearly has the same birthday as .  Moreover, if such that has the same birthday as , then it is clear that has the same birthday as .  Finally, if such that has the same birthday as and has the same birthday as , then must have the same birthday as .   "
},
{
  "id": "exploration-3",
  "level": "2",
  "url": "SubSec-Integers-Mod-m.html#exploration-3",
  "type": "Exploration",
  "number": "1.4.4",
  "title": "",
  "body": "  What other relations can you think of? Write down one example and one non-example of an equivalence relation.   "
},
{
  "id": "activity-4",
  "level": "2",
  "url": "SubSec-Integers-Mod-m.html#activity-4",
  "type": "Activity",
  "number": "1.4.5",
  "title": "",
  "body": "  Prove that is not an equivalence relation on .    The relation fails the symmetry condition. As an example, note that , but .   "
},
{
  "id": "definition-8",
  "level": "2",
  "url": "SubSec-Integers-Mod-m.html#definition-8",
  "type": "Definition",
  "number": "1.4.6",
  "title": "",
  "body": " congruence modulo   Let and , . We say is congruent to modulo if . We write .   "
},
{
  "id": "activity-5",
  "level": "2",
  "url": "SubSec-Integers-Mod-m.html#activity-5",
  "type": "Activity",
  "number": "1.4.7",
  "title": "",
  "body": "  Justify the following congruences.          "
},
{
  "id": "theorem-15",
  "level": "2",
  "url": "SubSec-Integers-Mod-m.html#theorem-15",
  "type": "Theorem",
  "number": "1.4.8",
  "title": "",
  "body": "  Given an integer , congruence modulo is an equivalence relation on .    Let . Then , so . Thus, is reflexive.  Let such that . This means that , so there is some such that . Then , so and . Thus, is symmetric.  Finally, let such that and . Then and , so there are integers such that and . Summing these equations yields , so and .   "
},
{
  "id": "p-196",
  "level": "2",
  "url": "SubSec-Integers-Mod-m.html#p-196",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "the integers modulo "
},
{
  "id": "exploration-4",
  "level": "2",
  "url": "SubSec-Integers-Mod-m.html#exploration-4",
  "type": "Exploration",
  "number": "1.4.9",
  "title": "",
  "body": "  List the elements of and .    The equivalence classes of are Since every integer is in one of the above equivalence classes, we know we have found them all.   "
},
{
  "id": "thm-additionmodulom",
  "level": "2",
  "url": "SubSec-Integers-Mod-m.html#thm-additionmodulom",
  "type": "Theorem",
  "number": "1.4.10",
  "title": "",
  "body": "  Let and such that and . Then .    Write and for some . Then , so .   "
},
{
  "id": "theorem-17",
  "level": "2",
  "url": "SubSec-Integers-Mod-m.html#theorem-17",
  "type": "Theorem",
  "number": "1.4.11",
  "title": "",
  "body": "  Let and such that and . Then .   "
},
{
  "id": "proof-20",
  "level": "2",
  "url": "SubSec-Integers-Mod-m.html#proof-20",
  "type": "Proof",
  "number": "1.4.1",
  "title": "",
  "body": " Write and for some . Observe .  Thus, and .  "
},
{
  "id": "def-well-defined",
  "level": "2",
  "url": "SubSec-Integers-Mod-m.html#def-well-defined",
  "type": "Definition",
  "number": "1.4.12",
  "title": "",
  "body": " well-defined statement   Let be a set and an equivalence relation on . Then a statement about the equivalence classes of is well-defined if the representative of the equivalence class does not matter. That is, whenever , .   "
},
{
  "id": "def-arithemticmodm",
  "level": "2",
  "url": "SubSec-Integers-Mod-m.html#def-arithemticmodm",
  "type": "Definition",
  "number": "1.4.13",
  "title": "",
  "body": "  Let and . Then the following are well-defined operations on the equivalence classes:    Addition modulo : . The symbol is often used to indicate that we are defining the expression on the left to equal the expression on the right.      Multiplication modulo : .      "
},
{
  "id": "activity-6",
  "level": "2",
  "url": "SubSec-Integers-Mod-m.html#activity-6",
  "type": "Activity",
  "number": "1.4.14",
  "title": "",
  "body": "  Without passing back to , find the smallest nonnegative integer representative of the resulting equivalence classes.   in  in  in  in  in    TBD  "
},
{
  "id": "q_zmodmcancel",
  "level": "2",
  "url": "SubSec-Integers-Mod-m.html#q_zmodmcancel",
  "type": "Investigation",
  "number": "1.4.15",
  "title": "",
  "body": "  Let with and . If , is it true that ? If so, prove it. If not, find an example of when the statement fails to hold.    It is not true. For example, in , , but .   "
},
{
  "id": "theorem_cancelrelprime",
  "level": "2",
  "url": "SubSec-Integers-Mod-m.html#theorem_cancelrelprime",
  "type": "Theorem",
  "number": "1.4.16",
  "title": "",
  "body": "  Let , and be integers with and . Then there is some such that .  Conclude that if in that .    We know that , i.e., that . By Theorem , .   "
},
{
  "id": "theorem_cancelinZp",
  "level": "2",
  "url": "SubSec-Integers-Mod-m.html#theorem_cancelinZp",
  "type": "Theorem",
  "number": "1.4.17",
  "title": "",
  "body": "  Let be prime and such that . Then   there is some such that ; and,    if , .       In , every nonzero equivalence class is represented by an for which . Apply .   "
},
{
  "id": "SubSec-Fields",
  "level": "1",
  "url": "SubSec-Fields.html",
  "type": "Section",
  "number": "2.1",
  "title": "Fields",
  "body": " Fields   Guiding Questions   In this section, we'll seek to answer the questions:  What are binary operations?  What is a field? What sorts of things can one do in a field?  What are examples of fields?      We now begin the process of abstraction. We will do this in stages, beginning with the concept of a field . First, we need to formally define some familiar sets of numbers.    The rational numbers, denoted by , is the set .    Recall that in elementary school, you learned that two fractions are equivalent if and only if .    Prove that our elementary school definition of equivalent fractions is an equivalence relation. Recall .    We likely have an intuitive idea of what is meant by , the set of real numbers. Defining rigorously is actually quite difficult, and occupies a significant amount of time in a first course in real analysis. Thus, we will make use of your intuition.   Out of we may build the complex numbers.    The complex numbers consist of all expressions of the form , where and . Given , we say is the real part of and is the imaginary part . The set of complex numbers is denoted .    As was mentioned in the Introduction , algebra comes from an Arabic word meaning the reunion of broken parts . We therefore need a way of combining two elements of a set into one; we turn to a particular type of function, known as a binary operation, to accomplish this.   binary operation    binary operation Let be a nonempty set. A function is called a binary operation . If is a binary operation on , we say that is closed under the operation . [Given , we usually write in place of the typical function notation, .]      Which of are binary operations:   on ?    on ?    on ?    on ?    on ? (Recall that for , and .)       Division is never a binary operation. The others are binary operations on , , and . The only binary operation on is addition.      Choose your favorite nonempty set and describe a binary operation different than those in .    Answers vary, but one option is to define by     The hallmark of modern pure mathematics is the use of axioms . An axiom is essentially an unproved assertion of truth. Our use of axioms serves several purposes.  From a logical perspective, axioms help us avoid the problem of infinite regression (e.g., asking How do you know? over and over again). That is, axioms give us very clear starting points from which to make our deductions.   To that end, our first abstract algebraic structure captures and axiomatizes familiar behavior about how numbers can be combined to produce other numbers of the same type.   field   A field is a nonempty set with at least two elements and binary operations and , denoted , and satisfying the following field axioms :   Given any , . (Associativity of addition)    Given any , . (Commutativity of addition)    There exists an element such that for all , . (Additive identity)    Given any there exists a such that . (Additive inverse)    Given any , . (Associativity of multiplication)    Given any , . (Commutativity of multiplication)    There exists an element such that for all , . (Multiplicative identity)    For all , , there exists a such that . (Multiplicative inverse)    For all , . (Distributive property I)    For all , . (Distributive property II)       We will usually write as . Additionally, we will usually drop the subscripts on unless we need to distinguish between fundamentally different identities in different fields.    Which of the following are fields under the specified operations? For most, a short justification or counterexample is sufficient.    under the usual addition and multiplication operations     under the usual addition and multiplication operations     , the set of even integers, under the usual addition and multiplication operations     under the usual addition and multiplication operations     under addition and multiplication modulo 6     under addition and multiplication modulo 5     under the usual addition and multiplication operations     under the complex addition and multiplication defined in      For students who have taken a linear algebra course. , the set of matrices with real coefficients using the usual definition of matrix multiplication Recall that, if , then . and matrix addition.           is not closed under taking additive inverses, so is not a field.     is not a field, as there is no integer such that .     is not a field for the same reason.     is a field.     is not a field; there is no for which (you can check them all; there are only 4 viable options).      is a field. The axioms pertaining to addition and multiplication were established earlier or rely on the same axioms holding for .     is a field     is a field. Given , .     is not a field. Matrix multiplication is not commutative.       In the , you determined which of sets of familiar mathematical objects are and are not fields. Notice that you have been working with fields for years and that our abstraction of language to that of fields is simply to allow us to explore the common features at the same time - it is inefficient to prove the same statement about every single field when we can prove it once and for all about fields in general.   Properties of Fields   Let be a field.   The additive identity is unique.    For all , .    Additive inverses are unique.    The multiplicative identity is unique.    Multiplicative inverses are unique.      Note that we are saying that the additive inverse of the multiplicative identity times itself equals the multiplicative identity. You should use only the field axioms and the properties previously established in this theorem.  Minus times Minus equals Plus: The reason for this we need not discuss. -W.H. Auden           Assume both satisfy the additive identity axiom. Observe that .    As , we may write . Now add the additive inverse of to both sides to obtain .    Let and suppose and are such that and . Then , and we may add (or ) to both sides to obtain and . Thus .    Suppose and are multiplicative identities. Then .    Let be nonzero and suppose are multiplicative inverses for . Then , and we may multiply by (or ) to obtain .    Observe that by the definition of additive inverses. Multiply both sides by and distribute to obtain . By part 2 of this theorem and the definition of a multiplicative identity, we obtain . We now add the multiplicative identity to obtain , which simplifies to .     One consequence of is that, given , , we may refer to as the additive inverse of , and as the multiplicative inverse of . We will thus employ this familiar terminology henceforth.     For which is a field? Compute some examples, form a conjecture, and prove your conjecture.    "
},
{
  "id": "definition-11",
  "level": "2",
  "url": "SubSec-Fields.html#definition-11",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  The rational numbers, denoted by , is the set .   "
},
{
  "id": "activity-7",
  "level": "2",
  "url": "SubSec-Fields.html#activity-7",
  "type": "Activity",
  "number": "2.1.2",
  "title": "",
  "body": "  Prove that our elementary school definition of equivalent fractions is an equivalence relation. Recall .   "
},
{
  "id": "definition-12",
  "level": "2",
  "url": "SubSec-Fields.html#definition-12",
  "type": "Definition",
  "number": "2.1.3",
  "title": "",
  "body": "  The complex numbers consist of all expressions of the form , where and . Given , we say is the real part of and is the imaginary part . The set of complex numbers is denoted .   "
},
{
  "id": "def_binaryoperation",
  "level": "2",
  "url": "SubSec-Fields.html#def_binaryoperation",
  "type": "Definition",
  "number": "2.1.4",
  "title": "",
  "body": " binary operation    binary operation Let be a nonempty set. A function is called a binary operation . If is a binary operation on , we say that is closed under the operation . [Given , we usually write in place of the typical function notation, .]   "
},
{
  "id": "invest-binop",
  "level": "2",
  "url": "SubSec-Fields.html#invest-binop",
  "type": "Investigation",
  "number": "2.1.5",
  "title": "",
  "body": "  Which of are binary operations:   on ?    on ?    on ?    on ?    on ? (Recall that for , and .)       Division is never a binary operation. The others are binary operations on , , and . The only binary operation on is addition.   "
},
{
  "id": "activity-8",
  "level": "2",
  "url": "SubSec-Fields.html#activity-8",
  "type": "Activity",
  "number": "2.1.6",
  "title": "",
  "body": "  Choose your favorite nonempty set and describe a binary operation different than those in .    Answers vary, but one option is to define by    "
},
{
  "id": "def_field",
  "level": "2",
  "url": "SubSec-Fields.html#def_field",
  "type": "Definition",
  "number": "2.1.7",
  "title": "",
  "body": " field   A field is a nonempty set with at least two elements and binary operations and , denoted , and satisfying the following field axioms :   Given any , . (Associativity of addition)    Given any , . (Commutativity of addition)    There exists an element such that for all , . (Additive identity)    Given any there exists a such that . (Additive inverse)    Given any , . (Associativity of multiplication)    Given any , . (Commutativity of multiplication)    There exists an element such that for all , . (Multiplicative identity)    For all , , there exists a such that . (Multiplicative inverse)    For all , . (Distributive property I)    For all , . (Distributive property II)      "
},
{
  "id": "exer_fieldexamples",
  "level": "2",
  "url": "SubSec-Fields.html#exer_fieldexamples",
  "type": "Investigation",
  "number": "2.1.8",
  "title": "",
  "body": "  Which of the following are fields under the specified operations? For most, a short justification or counterexample is sufficient.    under the usual addition and multiplication operations     under the usual addition and multiplication operations     , the set of even integers, under the usual addition and multiplication operations     under the usual addition and multiplication operations     under addition and multiplication modulo 6     under addition and multiplication modulo 5     under the usual addition and multiplication operations     under the complex addition and multiplication defined in      For students who have taken a linear algebra course. , the set of matrices with real coefficients using the usual definition of matrix multiplication Recall that, if , then . and matrix addition.           is not closed under taking additive inverses, so is not a field.     is not a field, as there is no integer such that .     is not a field for the same reason.     is a field.     is not a field; there is no for which (you can check them all; there are only 4 viable options).      is a field. The axioms pertaining to addition and multiplication were established earlier or rely on the same axioms holding for .     is a field     is a field. Given , .     is not a field. Matrix multiplication is not commutative.      "
},
{
  "id": "thm_fieldproperties",
  "level": "2",
  "url": "SubSec-Fields.html#thm_fieldproperties",
  "type": "Theorem",
  "number": "2.1.9",
  "title": "Properties of Fields.",
  "body": " Properties of Fields   Let be a field.   The additive identity is unique.    For all , .    Additive inverses are unique.    The multiplicative identity is unique.    Multiplicative inverses are unique.      Note that we are saying that the additive inverse of the multiplicative identity times itself equals the multiplicative identity. You should use only the field axioms and the properties previously established in this theorem.  Minus times Minus equals Plus: The reason for this we need not discuss. -W.H. Auden       "
},
{
  "id": "proof-23",
  "level": "2",
  "url": "SubSec-Fields.html#proof-23",
  "type": "Proof",
  "number": "2.1.1",
  "title": "",
  "body": "   Assume both satisfy the additive identity axiom. Observe that .    As , we may write . Now add the additive inverse of to both sides to obtain .    Let and suppose and are such that and . Then , and we may add (or ) to both sides to obtain and . Thus .    Suppose and are multiplicative identities. Then .    Let be nonzero and suppose are multiplicative inverses for . Then , and we may multiply by (or ) to obtain .    Observe that by the definition of additive inverses. Multiply both sides by and distribute to obtain . By part 2 of this theorem and the definition of a multiplicative identity, we obtain . We now add the multiplicative identity to obtain , which simplifies to .    "
},
{
  "id": "investigation-9",
  "level": "2",
  "url": "SubSec-Fields.html#investigation-9",
  "type": "Investigation",
  "number": "2.1.10",
  "title": "",
  "body": "  For which is a field? Compute some examples, form a conjecture, and prove your conjecture.   "
},
{
  "id": "SubSec-Rings",
  "level": "1",
  "url": "SubSec-Rings.html",
  "type": "Section",
  "number": "2.2",
  "title": "Rings",
  "body": " Rings   Guiding Questions   In this section, we'll seek to answer the questions:  What are rings and integral domains, and how do they relate to fields?  What are subrings, and how can we tell if a given subset of a ring is a subring?  What special types of elements do rings have?      In the previous section, we observed that many familiar number systems are fields but that some are not. As we will see, these non-fields are often more structurally interesting, at least from the perspective of factorization; thus, in this section, we explore them in more detail. Before we proceed with that endeavor we will give a formal definition of polynomial so that we can include it in our work.    Let be a set with a well-defined addition operation and additive identity , and a variable. We define a polynomial in with coefficients in to be an expression of the form , where . We call the degree of the polynomial , denoted , and the coefficients of the polynomial. The coefficient is known as the leading coefficient of , and is the leading term of . By we denote the set of all polynomials with coefficients in . The additive identity of is , called the zero polynomial , and is the polynomial whose coefficients are all . The degree of the zero polynomial is .      Give some examples of polynomials in for various choices of number systems . Identify their coefficients, leading terms, and degrees.      In the following table, fill in a Y if the set has the property; fill in a N if it does not.   A list of properties and sets.                                           Closure under +                           Closure under                           is associative                           is associative                           + is commutative                           is commutative                           distributes over +                           There is an additive identity                           All elements have additive inverses                           There is a multiplicative identity                           All nonzero elements have mult. inverses                                Which of the field axioms in hold for , where is a field, and which fail to hold in general?    All the axioms hold, except F8. For instance, there is no polynomial for which .    As a result of the answer to and the completed Table , we make the following definition.   ring   A ring  is a nonempty set, together with binary operations and , denoted , and satisfying the following axioms.   Given any , . (Associativity of addition)    Given any , . (Commutativity of addition)    There exists an element such that for all , . (Additive identity)    Given any there exists a such that . (Additive inverses)    Given any , . (Associativity of multiplication)    For all , . (Distributive property I)    For all , . (Distributive property II)   As with fields, when the ring is clear from context, we will often write in place of .      Compare and contrast Definitions and . What are the similarities? What are the differences?    While rings do not enjoy all the properties of fields, they are incredibly useful even in applied mathematics (see, e.g., for one recent example).    commutative ring  unity  commutative ring with identity  A ring is said to be commutative if, for all , . Additionally, is said to have a unity or multiplicative identity if there is an element such that for all , .    If is noncommutative, it may have a left (respectively, right) identity, i.e., an element such that for all , (respectively, ). If has an element for which for all , is often called a two-sided identity. In short, noncommutative rings may have left, right, or two-sided identities (or none at all).    Consider the sets given in Table . Which are rings? Which are commutative rings with identity?      Which properties of fields in Theorem hold for (commutative) rings?      Are all rings fields? Are all fields rings? Justify.      Most familiar rings are commutative, though not all. Most familiar (commutative) rings have identities, but not all. Find:   A ring that does not have an identity Sometimes called a rng .  .    A noncommutative ring that does have an (two-sided) identity.                ; the identity matrix is a two-sided identity.       In the 1920s, Emmy Noether was the first to explicitly describe the ring axioms as we know them today, and her definition of a (not-necessarily-commutative) ring has led to a great deal of interesting work in algebra, number theory, and geometry, including the (see for more on the historical development of the proof of Fermat's Last Theorem). Most modern definitions of ring agree with our Definition and allow for rings with noncommutative multiplication and no multiplicative identity.  The following theorem states that the set of polynomials with coefficients in a ring is itself a ring under the usual operations of polynomial addition of like terms, and multiplication via distribution. The proof is not tricky, but a rigorous justification (especially of, e.g., the associativity of polynomial multiplication) is tedious, and thus is omitted.   Theorem   If is a (commutative) ring (with identity ), then is a (commutative) ring (with identity ).    One of the ways to better understand mathematical structures is to understand their similar substructures (e.g., given a vector space and a subspace , we may write ).    subring  overring   Let be a ring and let . If is itself a ring under and , we say is a subring of . In this case, is often called an overring of .    The following theorem provides a easy-to-apply test to check if a given subset of a ring is in fact a subring of .   subring test   Let be a ring and a subset of . Then is a subring if and only if:    ;     is closed under multiplication; and     is closed under subtraction.       TBD.      Determine whether the following rings are subrings of the given rings .    ,      ,      is any ring,      ,          In our study of rings, we are primarily interested in special types of subrings known as ideals , to be studied in more depth in .   unit  associates   Let be a ring and let be nonzero. If there is a such that , we say is unit of . We denote the set of units of by . We say are associates if there exists some such that .      Explicitly describe the set . What are the associates of 7 in ?    In other words, a unit in a ring is a nonzero element with a multiplicative inverse. The existence of units is the primary difference between fields and commutative rings with identity: in a field, all nonzero elements are units, while in a commutative ring with identity, no nonzero elements need be units, as demonstrates.    A commutative ring with identity in which every nonzero element is a unit is a field.     Compare the axioms for a commutative ring with identity and a field. The only thing missing from the ring axioms is the existence of multiplicative inverses for nonzero elements.   A useful tool for analyzing the structure of rings with finitely many elements are addition and multiplication tables. As an example, consider the addition and multiplication tables for shown in and .   Addition table for .                                                              Multiplication table for . >                                                              Calculate addition and multiplication tables for the following rings.        List 2-3 observations about your tables.    TBD.    One of the interesting side effects of our definition of ring is that it allows for behavior that may at first appear unintuitive or downright weird.   zero divisor   A zero divisor in a ring is a nonzero element such that there is a nonzero with or .    Notice that the reason the idea of zero divisors at first appears weird is that they are not something we encounter when working with our familiar sets of numbers, such as or . In fact, we specifically use the fact that there are no zero divisors in our familiar numbers systems to solve equations in high school algebra (e.g., if , then or ). The lack of zero divisors is one of the properties that does not persist in our abstraction from the integers to rings in general.    Find, with justification, all of the zero divisors in and . Make and prove a conjecture about the existence of zero divisors in , where .    The zero divisors in are . There are no zero divisors in .   conjecture.  is a zero divisor if and only if .      Are there any other rings in which you've seen zero divisors? Recall your answers to .    Matrix rings, if students have had linear algebra (and\/or completed ). Otherwise, this may be a new concept.      Let be a ring and suppose such that is a zero divisor. Then either or is a zero divisor.     Let such that is a zero divisor. Then (else ). Since is a zero divisor, there is some such that . If , then is a zero divisor, as . On the other hand, if , then is a zero divisor, as .     Let be a ring and . Then is not a zero divisor.     Let and suppose is a zero divisor. Then there is some such that . But then . \\Lightning     How can we reinterpret in light of our new language of units and zero divisors? State a theorem that uses this new language.    Answers may vary, but how about this: Let such that . Then if is not a zero divisor.    While there is a well-developed body of literature on (noncommutative) rings (possibly without identity), from this point on, and unless stated otherwise, when we use the word ring we mean commutative ring with identity .  Moreover, while even commutative rings with identity and zero divisors are of interest to mathematicians, we will focus our study on rings with no zero divisors. As these rings share many properties of the integers, they are known as integral domains .   integral domain  domain   A commutative ring with identity is an integral domain , or just domain , if has no zero divisors.    The next activities and theorems help us identify examples of domains, as well as situate the notion of a domain in its proper place relative to fields and rings in general.    Which of the following rings are domains? Justify your answers.                                 Every field is a domain.     If is a field, the nonzero elements of are units, which cannot be zero divisors. Thus, has no zero divisors.     Let and . Then is a field if and only if is a domain.     The forward direction holds by Theorem .  For the reverse, assume is a domain. Then has no zero divisors. If is composite, there exist integers satisfying such that . Then in , but . Thus, may not be composite, and is therefore prime. By an earlier theorem, is a field.     If is a domain and is a subring of with identity , then is a domain.     Any zero divisors in are also zero divisors in . Since has no zero divisors, neither does .     If is a domain, then so is .     Let and be nonzero polynomials in , where . Then the lowest-degree term in is . Since is a domain, , and thus is not the zero polynomial.     Is the converse of Theorem true? If so, give a short proof. If not, find a counterexample.    Yes. Apply Theorem .      Given a field , the set of polynomials is a domain.    When considering sets of polynomials, as we do in (particularly in ), the following results will be quite useful.    Let be a domain, and let be nonzero polynomials. Then .    Let the leading term of be and the leading term of be . Then the leading term of is . (Observe that since is a domain, .) Thus, .      Can the hypotheses of be relaxed? If so, provide more general hypotheses and adapt the proof. If not, give an illustrative example.    No; let . Observe that , but has degree 1.      Let be a domain. What are the units of ? Prove your answer.    The units are . Clearly, .  Suppose such that . Then . Thus , and consequently, .     C. Curto, V. Itskov, A. Veliz-Cuba, N. Youngs, The Neural Ring: An Algebraic Tool for Analyzing the Intrinsic Structure of Neural Codes , Bull. Math. Bio. 75 (2013), 1571-1611, DOI 10.1007\/s11538-013-9860-3    "
},
{
  "id": "def-polynomial",
  "level": "2",
  "url": "SubSec-Rings.html#def-polynomial",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  Let be a set with a well-defined addition operation and additive identity , and a variable. We define a polynomial in with coefficients in to be an expression of the form , where . We call the degree of the polynomial , denoted , and the coefficients of the polynomial. The coefficient is known as the leading coefficient of , and is the leading term of . By we denote the set of all polynomials with coefficients in . The additive identity of is , called the zero polynomial , and is the polynomial whose coefficients are all . The degree of the zero polynomial is .   "
},
{
  "id": "exploration-5",
  "level": "2",
  "url": "SubSec-Rings.html#exploration-5",
  "type": "Exploration",
  "number": "2.2.2",
  "title": "",
  "body": "  Give some examples of polynomials in for various choices of number systems . Identify their coefficients, leading terms, and degrees.   "
},
{
  "id": "exploration-6",
  "level": "2",
  "url": "SubSec-Rings.html#exploration-6",
  "type": "Exploration",
  "number": "2.2.3",
  "title": "",
  "body": "  In the following table, fill in a Y if the set has the property; fill in a N if it does not.   A list of properties and sets.                                           Closure under +                           Closure under                           is associative                           is associative                           + is commutative                           is commutative                           distributes over +                           There is an additive identity                           All elements have additive inverses                           There is a multiplicative identity                           All nonzero elements have mult. inverses                             "
},
{
  "id": "q_fieldaxiomspolyring",
  "level": "2",
  "url": "SubSec-Rings.html#q_fieldaxiomspolyring",
  "type": "Exploration",
  "number": "2.2.5",
  "title": "",
  "body": "  Which of the field axioms in hold for , where is a field, and which fail to hold in general?    All the axioms hold, except F8. For instance, there is no polynomial for which .   "
},
{
  "id": "def_ring",
  "level": "2",
  "url": "SubSec-Rings.html#def_ring",
  "type": "Definition",
  "number": "2.2.6",
  "title": "",
  "body": " ring   A ring  is a nonempty set, together with binary operations and , denoted , and satisfying the following axioms.   Given any , . (Associativity of addition)    Given any , . (Commutativity of addition)    There exists an element such that for all , . (Additive identity)    Given any there exists a such that . (Additive inverses)    Given any , . (Associativity of multiplication)    For all , . (Distributive property I)    For all , . (Distributive property II)   As with fields, when the ring is clear from context, we will often write in place of .   "
},
{
  "id": "investigation-10",
  "level": "2",
  "url": "SubSec-Rings.html#investigation-10",
  "type": "Investigation",
  "number": "2.2.7",
  "title": "",
  "body": "  Compare and contrast Definitions and . What are the similarities? What are the differences?   "
},
{
  "id": "definition-17",
  "level": "2",
  "url": "SubSec-Rings.html#definition-17",
  "type": "Definition",
  "number": "2.2.8",
  "title": "",
  "body": "  commutative ring  unity  commutative ring with identity  A ring is said to be commutative if, for all , . Additionally, is said to have a unity or multiplicative identity if there is an element such that for all , .   "
},
{
  "id": "expl-rings-examples",
  "level": "2",
  "url": "SubSec-Rings.html#expl-rings-examples",
  "type": "Exploration",
  "number": "2.2.9",
  "title": "",
  "body": "  Consider the sets given in Table . Which are rings? Which are commutative rings with identity?   "
},
{
  "id": "exploration-9",
  "level": "2",
  "url": "SubSec-Rings.html#exploration-9",
  "type": "Exploration",
  "number": "2.2.10",
  "title": "",
  "body": "  Which properties of fields in Theorem hold for (commutative) rings?   "
},
{
  "id": "investigation-11",
  "level": "2",
  "url": "SubSec-Rings.html#investigation-11",
  "type": "Investigation",
  "number": "2.2.11",
  "title": "",
  "body": "  Are all rings fields? Are all fields rings? Justify.   "
},
{
  "id": "investigation-12",
  "level": "2",
  "url": "SubSec-Rings.html#investigation-12",
  "type": "Investigation",
  "number": "2.2.12",
  "title": "",
  "body": "  Most familiar rings are commutative, though not all. Most familiar (commutative) rings have identities, but not all. Find:   A ring that does not have an identity Sometimes called a rng .  .    A noncommutative ring that does have an (two-sided) identity.                ; the identity matrix is a two-sided identity.      "
},
{
  "id": "definition-18",
  "level": "2",
  "url": "SubSec-Rings.html#definition-18",
  "type": "Definition",
  "number": "2.2.13",
  "title": "",
  "body": " subring  overring   Let be a ring and let . If is itself a ring under and , we say is a subring of . In this case, is often called an overring of .   "
},
{
  "id": "theorem_subringtest",
  "level": "2",
  "url": "SubSec-Rings.html#theorem_subringtest",
  "type": "Theorem",
  "number": "2.2.14",
  "title": "",
  "body": " subring test   Let be a ring and a subset of . Then is a subring if and only if:    ;     is closed under multiplication; and     is closed under subtraction.       TBD.   "
},
{
  "id": "activity-9",
  "level": "2",
  "url": "SubSec-Rings.html#activity-9",
  "type": "Activity",
  "number": "2.2.15",
  "title": "",
  "body": "  Determine whether the following rings are subrings of the given rings .    ,      ,      is any ring,      ,         "
},
{
  "id": "def-unit",
  "level": "2",
  "url": "SubSec-Rings.html#def-unit",
  "type": "Definition",
  "number": "2.2.16",
  "title": "",
  "body": " unit  associates   Let be a ring and let be nonzero. If there is a such that , we say is unit of . We denote the set of units of by . We say are associates if there exists some such that .   "
},
{
  "id": "exploration-10",
  "level": "2",
  "url": "SubSec-Rings.html#exploration-10",
  "type": "Exploration",
  "number": "2.2.17",
  "title": "",
  "body": "  Explicitly describe the set . What are the associates of 7 in ?   "
},
{
  "id": "thm-cri-field",
  "level": "2",
  "url": "SubSec-Rings.html#thm-cri-field",
  "type": "Theorem",
  "number": "2.2.18",
  "title": "",
  "body": "  A commutative ring with identity in which every nonzero element is a unit is a field.   "
},
{
  "id": "proof-25",
  "level": "2",
  "url": "SubSec-Rings.html#proof-25",
  "type": "Proof",
  "number": "2.2.1",
  "title": "",
  "body": " Compare the axioms for a commutative ring with identity and a field. The only thing missing from the ring axioms is the existence of multiplicative inverses for nonzero elements.  "
},
{
  "id": "table-z3addition",
  "level": "2",
  "url": "SubSec-Rings.html#table-z3addition",
  "type": "Table",
  "number": "2.2.19",
  "title": "Addition table for <span class=\"process-math\">\\(R=\\Z_3\\text{.}\\)<\/span>",
  "body": " Addition table for .                                                            "
},
{
  "id": "table-z3multiplication",
  "level": "2",
  "url": "SubSec-Rings.html#table-z3multiplication",
  "type": "Table",
  "number": "2.2.20",
  "title": "Multiplication table for <span class=\"process-math\">\\(R=\\Z_3\\text{.}\\)<\/span>",
  "body": " Multiplication table for . >                                                           "
},
{
  "id": "invest-tables",
  "level": "2",
  "url": "SubSec-Rings.html#invest-tables",
  "type": "Investigation",
  "number": "2.2.21",
  "title": "",
  "body": "  Calculate addition and multiplication tables for the following rings.        List 2-3 observations about your tables.    TBD.   "
},
{
  "id": "definition-20",
  "level": "2",
  "url": "SubSec-Rings.html#definition-20",
  "type": "Definition",
  "number": "2.2.22",
  "title": "",
  "body": " zero divisor   A zero divisor in a ring is a nonzero element such that there is a nonzero with or .   "
},
{
  "id": "exploration-11",
  "level": "2",
  "url": "SubSec-Rings.html#exploration-11",
  "type": "Exploration",
  "number": "2.2.23",
  "title": "",
  "body": "  Find, with justification, all of the zero divisors in and . Make and prove a conjecture about the existence of zero divisors in , where .    The zero divisors in are . There are no zero divisors in .   conjecture.  is a zero divisor if and only if .   "
},
{
  "id": "investigation-14",
  "level": "2",
  "url": "SubSec-Rings.html#investigation-14",
  "type": "Investigation",
  "number": "2.2.24",
  "title": "",
  "body": "  Are there any other rings in which you've seen zero divisors? Recall your answers to .    Matrix rings, if students have had linear algebra (and\/or completed ). Otherwise, this may be a new concept.   "
},
{
  "id": "theorem-23",
  "level": "2",
  "url": "SubSec-Rings.html#theorem-23",
  "type": "Theorem",
  "number": "2.2.25",
  "title": "",
  "body": "  Let be a ring and suppose such that is a zero divisor. Then either or is a zero divisor.   "
},
{
  "id": "proof-26",
  "level": "2",
  "url": "SubSec-Rings.html#proof-26",
  "type": "Proof",
  "number": "2.2.2",
  "title": "",
  "body": " Let such that is a zero divisor. Then (else ). Since is a zero divisor, there is some such that . If , then is a zero divisor, as . On the other hand, if , then is a zero divisor, as .  "
},
{
  "id": "theorem_unitnotazd",
  "level": "2",
  "url": "SubSec-Rings.html#theorem_unitnotazd",
  "type": "Theorem",
  "number": "2.2.26",
  "title": "",
  "body": "  Let be a ring and . Then is not a zero divisor.   "
},
{
  "id": "proof-27",
  "level": "2",
  "url": "SubSec-Rings.html#proof-27",
  "type": "Proof",
  "number": "2.2.3",
  "title": "",
  "body": " Let and suppose is a zero divisor. Then there is some such that . But then . \\Lightning  "
},
{
  "id": "investigation-15",
  "level": "2",
  "url": "SubSec-Rings.html#investigation-15",
  "type": "Investigation",
  "number": "2.2.27",
  "title": "",
  "body": "  How can we reinterpret in light of our new language of units and zero divisors? State a theorem that uses this new language.    Answers may vary, but how about this: Let such that . Then if is not a zero divisor.   "
},
{
  "id": "p-363",
  "level": "2",
  "url": "SubSec-Rings.html#p-363",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integral domains "
},
{
  "id": "definition-21",
  "level": "2",
  "url": "SubSec-Rings.html#definition-21",
  "type": "Definition",
  "number": "2.2.28",
  "title": "",
  "body": " integral domain  domain   A commutative ring with identity is an integral domain , or just domain , if has no zero divisors.   "
},
{
  "id": "activity-10",
  "level": "2",
  "url": "SubSec-Rings.html#activity-10",
  "type": "Activity",
  "number": "2.2.29",
  "title": "",
  "body": "  Which of the following rings are domains? Justify your answers.                              "
},
{
  "id": "theorem_everyfieldisadomain",
  "level": "2",
  "url": "SubSec-Rings.html#theorem_everyfieldisadomain",
  "type": "Theorem",
  "number": "2.2.30",
  "title": "",
  "body": "  Every field is a domain.   "
},
{
  "id": "proof-28",
  "level": "2",
  "url": "SubSec-Rings.html#proof-28",
  "type": "Proof",
  "number": "2.2.4",
  "title": "",
  "body": " If is a field, the nonzero elements of are units, which cannot be zero divisors. Thus, has no zero divisors.  "
},
{
  "id": "theorem-26",
  "level": "2",
  "url": "SubSec-Rings.html#theorem-26",
  "type": "Theorem",
  "number": "2.2.31",
  "title": "",
  "body": "  Let and . Then is a field if and only if is a domain.   "
},
{
  "id": "proof-29",
  "level": "2",
  "url": "SubSec-Rings.html#proof-29",
  "type": "Proof",
  "number": "2.2.5",
  "title": "",
  "body": " The forward direction holds by Theorem .  For the reverse, assume is a domain. Then has no zero divisors. If is composite, there exist integers satisfying such that . Then in , but . Thus, may not be composite, and is therefore prime. By an earlier theorem, is a field.  "
},
{
  "id": "theorem_subringsaredomains",
  "level": "2",
  "url": "SubSec-Rings.html#theorem_subringsaredomains",
  "type": "Theorem",
  "number": "2.2.32",
  "title": "",
  "body": "  If is a domain and is a subring of with identity , then is a domain.   "
},
{
  "id": "proof-30",
  "level": "2",
  "url": "SubSec-Rings.html#proof-30",
  "type": "Proof",
  "number": "2.2.6",
  "title": "",
  "body": " Any zero divisors in are also zero divisors in . Since has no zero divisors, neither does .  "
},
{
  "id": "theorem_domainimpliespolynomialdomain",
  "level": "2",
  "url": "SubSec-Rings.html#theorem_domainimpliespolynomialdomain",
  "type": "Theorem",
  "number": "2.2.33",
  "title": "",
  "body": "  If is a domain, then so is .   "
},
{
  "id": "proof-31",
  "level": "2",
  "url": "SubSec-Rings.html#proof-31",
  "type": "Proof",
  "number": "2.2.7",
  "title": "",
  "body": " Let and be nonzero polynomials in , where . Then the lowest-degree term in is . Since is a domain, , and thus is not the zero polynomial.  "
},
{
  "id": "investigation-16",
  "level": "2",
  "url": "SubSec-Rings.html#investigation-16",
  "type": "Investigation",
  "number": "2.2.34",
  "title": "",
  "body": "  Is the converse of Theorem true? If so, give a short proof. If not, find a counterexample.    Yes. Apply Theorem .   "
},
{
  "id": "corollary-2",
  "level": "2",
  "url": "SubSec-Rings.html#corollary-2",
  "type": "Corollary",
  "number": "2.2.35",
  "title": "",
  "body": "  Given a field , the set of polynomials is a domain.   "
},
{
  "id": "theorem_degreeofproductinfield",
  "level": "2",
  "url": "SubSec-Rings.html#theorem_degreeofproductinfield",
  "type": "Theorem",
  "number": "2.2.36",
  "title": "",
  "body": "  Let be a domain, and let be nonzero polynomials. Then .    Let the leading term of be and the leading term of be . Then the leading term of is . (Observe that since is a domain, .) Thus, .   "
},
{
  "id": "exploration-12",
  "level": "2",
  "url": "SubSec-Rings.html#exploration-12",
  "type": "Exploration",
  "number": "2.2.37",
  "title": "",
  "body": "  Can the hypotheses of be relaxed? If so, provide more general hypotheses and adapt the proof. If not, give an illustrative example.    No; let . Observe that , but has degree 1.   "
},
{
  "id": "investigation-17",
  "level": "2",
  "url": "SubSec-Rings.html#investigation-17",
  "type": "Investigation",
  "number": "2.2.38",
  "title": "",
  "body": "  Let be a domain. What are the units of ? Prove your answer.    The units are . Clearly, .  Suppose such that . Then . Thus , and consequently, .   "
},
{
  "id": "SubSec-Divisibility-in-Domains",
  "level": "1",
  "url": "SubSec-Divisibility-in-Domains.html",
  "type": "Section",
  "number": "2.3",
  "title": "Divisibility in Integral Domains",
  "body": " Divisibility in Integral Domains   Guiding Questions   In this section, we'll seek to answer the questions:  What multiplicative properties can we generalize from to any integral domain?  What are the differences between a prime and irreducible element in a commutative ring?      When we introduced the notion of integral domain, we said that part of the reason for the definition was to capture some of the most essential properties of the integers. This is the heart of abstraction and generalization in mathematics: to distill the important properties of our objects of interest and explore the consequences of those properties. One such important property of is cancellation .    Let be a ring. Then is a domain if and only if for all with and , we have .    Assume is a domain and . Then , so . Since is a domain, it has no zero divisors, and therefore either or . The first possibility is ruled out by our assumptions on , so we must have , or .  Conversely, assume that is not a domain. Let be a zero divisor; then there is a nonzero such that . This implies that , a contradiction.    We may read as saying that the defining property of an integral domain is the ability to cancel common nonzero factors. Note that we have not divided ; division is not a binary operation, and nonzero elements of rings need not be units. However, as was the case in , there are notions of divisibility and factorization in rings.   divides (ring)  factor (ring)   Let be a commutative ring with identity, and let . We say  divides  and write if there is a such that . We then say that is a factor of .      Find all factors of in the following rings:         TBD.    Our definition of prime also extends nicely to commutative rings with identity. Indeed, the desire to extend the familiar notion of prime from to any ring is the reason for our less-familiar definition given in .    Let be commutative with identity. We say a nonzero nonunit element is prime if whenever for some , either or .    A notion related to primality is irreducibility. In fact, one might reasonably say that irreducibility is the natural generalization of the typical definition of prime one encounters in school mathematics.   irreducible (ring element)  atom   Let be commutative with identity. We say a nonzero nonunit element is irreducible if whenever for some , one of or is a unit. (Note that in some areas of the literature, the word atom is used interchangeably with irreducible.)      Find the units, primes, and irreducibles in the following rings.          TBD.    In domains, all primes are irreducible.    Let be a domain. If is prime, then is irreducible.     Compare to the proof of Theorem .  Let be prime, and suppose that for some . Then , so by definition either or . Without loss of generality, assume . Then there is a such that , so , and we may cancel to obtain . Thus, is a unit, making irreducible.   In familiar settings, the notion of prime and irreducible exactly coincide.    Every irreducible in is prime.     Let be irreducible, and suppose that . Then . Since is irreducible, either or is a unit. However, the only units are , so either one of or is or . In either case, is prime.   Despite their overlap in familiar settings, primes and irreducibles are distinct types of elements. As the next exploration demonstrates, not all primes are irreducible. What is more, will show that not all irreducibles are primes, even in domains!    Find an example of a ring and prime such that is not irreducible.    In , is prime by but not irreducible as and is not a unit.      Consider the set of all polynomials in for which the coefficient on the linear term is zero. That is, .  (You should convince yourself that is an integral domain, but do not need to prove it.) Then, find a polynomial of the form in that is irreducible, but not prime.    Consider . Then is irreducible, as it cannot be factored into a product of linear polynomials (there aren't any in ), so any factorization of is degree 2 times degree 0. Then the leading coefficients must be units, i.e., both 1 or both .  However, is not prime, as but .    Our last straightforward generalization from the multiplicative structure of is the notion of greatest common divisor. As our next definition again demonstrates, our careful work in the context of generalizes nicely to all domains. Indeed, we intentionally did not appeal to to define the greatest common divisor in , as not all rings have a natural order relation like does.   greatest common divisor (integral domain)   Let be a domain, and let . A nonzero element is a greatest common divisor of and if    and and,    if with and , then .         Let be a domain and and suppose is a greatest common divisor of and . Then any associate of is also a greatest common divisor of and . (Recall .)     Let be a gcd of and , let , and . We claim is also a gcd of and .  Since and there are such that and . Then and , so and .  Let be a common divisor of and . Since is a gcd, , i.e., . Then , so .  Thus, is a gcd of and .     In most familiar domains, GCDs exist. However, they don't always! Find an example of elements in the ring from Exercise which do not have a GCD. Justify your assertion.    Consider and . First note that is not a common divisor in .  Both and are divisible by and in . However, neither can be the gcd, as and .      Fill in the following blanks in order of increasing generality with the words ring , integral domain , field , and commutative ring .  __________ __________ __________ __________    "
},
{
  "id": "thm-domaincancel",
  "level": "2",
  "url": "SubSec-Divisibility-in-Domains.html#thm-domaincancel",
  "type": "Theorem",
  "number": "2.3.1",
  "title": "",
  "body": "  Let be a ring. Then is a domain if and only if for all with and , we have .    Assume is a domain and . Then , so . Since is a domain, it has no zero divisors, and therefore either or . The first possibility is ruled out by our assumptions on , so we must have , or .  Conversely, assume that is not a domain. Let be a zero divisor; then there is a nonzero such that . This implies that , a contradiction.   "
},
{
  "id": "definition-22",
  "level": "2",
  "url": "SubSec-Divisibility-in-Domains.html#definition-22",
  "type": "Definition",
  "number": "2.3.2",
  "title": "",
  "body": " divides (ring)  factor (ring)   Let be a commutative ring with identity, and let . We say  divides  and write if there is a such that . We then say that is a factor of .   "
},
{
  "id": "investigation-18",
  "level": "2",
  "url": "SubSec-Divisibility-in-Domains.html#investigation-18",
  "type": "Investigation",
  "number": "2.3.3",
  "title": "",
  "body": "  Find all factors of in the following rings:         TBD.   "
},
{
  "id": "definition-23",
  "level": "2",
  "url": "SubSec-Divisibility-in-Domains.html#definition-23",
  "type": "Definition",
  "number": "2.3.4",
  "title": "",
  "body": "  Let be commutative with identity. We say a nonzero nonunit element is prime if whenever for some , either or .   "
},
{
  "id": "def_irreducibleelement",
  "level": "2",
  "url": "SubSec-Divisibility-in-Domains.html#def_irreducibleelement",
  "type": "Definition",
  "number": "2.3.5",
  "title": "",
  "body": " irreducible (ring element)  atom   Let be commutative with identity. We say a nonzero nonunit element is irreducible if whenever for some , one of or is a unit. (Note that in some areas of the literature, the word atom is used interchangeably with irreducible.)   "
},
{
  "id": "expl-unit-prime-irred",
  "level": "2",
  "url": "SubSec-Divisibility-in-Domains.html#expl-unit-prime-irred",
  "type": "Exploration",
  "number": "2.3.6",
  "title": "",
  "body": "  Find the units, primes, and irreducibles in the following rings.          TBD.   "
},
{
  "id": "thm-primesareirredindomains",
  "level": "2",
  "url": "SubSec-Divisibility-in-Domains.html#thm-primesareirredindomains",
  "type": "Theorem",
  "number": "2.3.7",
  "title": "",
  "body": "  Let be a domain. If is prime, then is irreducible.   "
},
{
  "id": "proof-34",
  "level": "2",
  "url": "SubSec-Divisibility-in-Domains.html#proof-34",
  "type": "Proof",
  "number": "2.3.1",
  "title": "",
  "body": " Compare to the proof of Theorem .  Let be prime, and suppose that for some . Then , so by definition either or . Without loss of generality, assume . Then there is a such that , so , and we may cancel to obtain . Thus, is a unit, making irreducible.  "
},
{
  "id": "thm-irredisprimeinZ",
  "level": "2",
  "url": "SubSec-Divisibility-in-Domains.html#thm-irredisprimeinZ",
  "type": "Theorem",
  "number": "2.3.8",
  "title": "",
  "body": "  Every irreducible in is prime.   "
},
{
  "id": "proof-35",
  "level": "2",
  "url": "SubSec-Divisibility-in-Domains.html#proof-35",
  "type": "Proof",
  "number": "2.3.2",
  "title": "",
  "body": " Let be irreducible, and suppose that . Then . Since is irreducible, either or is a unit. However, the only units are , so either one of or is or . In either case, is prime.  "
},
{
  "id": "expl-prime-not-irred",
  "level": "2",
  "url": "SubSec-Divisibility-in-Domains.html#expl-prime-not-irred",
  "type": "Exploration",
  "number": "2.3.9",
  "title": "",
  "body": "  Find an example of a ring and prime such that is not irreducible.    In , is prime by but not irreducible as and is not a unit.   "
},
{
  "id": "exer_irreduciblenotprime",
  "level": "2",
  "url": "SubSec-Divisibility-in-Domains.html#exer_irreduciblenotprime",
  "type": "Exploration",
  "number": "2.3.10",
  "title": "",
  "body": "  Consider the set of all polynomials in for which the coefficient on the linear term is zero. That is, .  (You should convince yourself that is an integral domain, but do not need to prove it.) Then, find a polynomial of the form in that is irreducible, but not prime.    Consider . Then is irreducible, as it cannot be factored into a product of linear polynomials (there aren't any in ), so any factorization of is degree 2 times degree 0. Then the leading coefficients must be units, i.e., both 1 or both .  However, is not prime, as but .   "
},
{
  "id": "def-gcd-domain",
  "level": "2",
  "url": "SubSec-Divisibility-in-Domains.html#def-gcd-domain",
  "type": "Definition",
  "number": "2.3.11",
  "title": "",
  "body": " greatest common divisor (integral domain)   Let be a domain, and let . A nonzero element is a greatest common divisor of and if    and and,    if with and , then .      "
},
{
  "id": "theorem-33",
  "level": "2",
  "url": "SubSec-Divisibility-in-Domains.html#theorem-33",
  "type": "Theorem",
  "number": "2.3.12",
  "title": "",
  "body": "  Let be a domain and and suppose is a greatest common divisor of and . Then any associate of is also a greatest common divisor of and . (Recall .)   "
},
{
  "id": "proof-36",
  "level": "2",
  "url": "SubSec-Divisibility-in-Domains.html#proof-36",
  "type": "Proof",
  "number": "2.3.3",
  "title": "",
  "body": " Let be a gcd of and , let , and . We claim is also a gcd of and .  Since and there are such that and . Then and , so and .  Let be a common divisor of and . Since is a gcd, , i.e., . Then , so .  Thus, is a gcd of and .  "
},
{
  "id": "exploration-16",
  "level": "2",
  "url": "SubSec-Divisibility-in-Domains.html#exploration-16",
  "type": "Exploration",
  "number": "2.3.13",
  "title": "",
  "body": "  In most familiar domains, GCDs exist. However, they don't always! Find an example of elements in the ring from Exercise which do not have a GCD. Justify your assertion.    Consider and . First note that is not a common divisor in .  Both and are divisible by and in . However, neither can be the gcd, as and .   "
},
{
  "id": "exer_ringgeneralityone",
  "level": "2",
  "url": "SubSec-Divisibility-in-Domains.html#exer_ringgeneralityone",
  "type": "Exploration",
  "number": "2.3.14",
  "title": "",
  "body": "  Fill in the following blanks in order of increasing generality with the words ring , integral domain , field , and commutative ring .  __________ __________ __________ __________   "
},
{
  "id": "SubSec-Principal-Ideals",
  "level": "1",
  "url": "SubSec-Principal-Ideals.html",
  "type": "Section",
  "number": "2.4",
  "title": "Principal Ideals and Euclidean Domains",
  "body": " Principal Ideals and Euclidean Domains   Guiding Questions   In this section, we'll seek to answer the questions:  What are principal ideals, and what are principal ideal domains?  What are Euclidean domains, and how are they related to PIDs?      One of the ways in which mathematicians study the structure of an abstract object is by considering how it interacts with other (related) objects. This is especially true of its sub objects. Thus, in linear algebra, we are often concerned with subspaces of a vector space as a means of understanding the vector space, or even submatrices as a way of understanding a matrix (see, e.g., the cofactor expansion formula for the determinant). In real analysis and topology, the important subobjects are usually open sets, or subsequences, and the study of a graph's subgraphs is an important approach to many questions in graph theory.  In this section, we begin a set-theoretic structural exploration of the notion of ring by considering a particularly important class of subring which will be integral to our understanding of factorization.  These subrings are called ideals . They arose in the work of Kummer and Dedekind as a way of trying to recover some notion of unique factorization in rings that do not have properties like the fundamental theorem of arithmetic in .    A subset of a (not necessarily commutative) ring is called an ideal if:        for all , ; and,    for all and for all , and .       Observe that the third requirement for a set to be an ideal of is simplified slightly if is commutative (which, we recall, all of our rings are).  There are many important examples and types of ideals, but there are also some trivial ideals contained in every ring.    Let be a ring. Then and are ideals of .      All ideals are subrings.     It is straightforward to check that all conditions of Theorem are satisfied.   The following theorem provides a useful characterization of when an ideal is in fact the whole ring.    Let be a ring and an ideal of . Then if and only if contains a unit of .     If , will do.  If there is a unit , then given any , , so .   The most important type of ideals (for our work, at least), are those which are the sets of all multiples of a single element in the ring. Such ideals are called principal ideals .    Let be commutative with identity and let . The set is an ideal (called the principal ideal generated by ).     Observe that .  Moreover, if , . Finally, if and , .  Thus, is an ideal.   The element in the theorem is known as a generator of .    Let be commutative with identity, and let . Give necessary and sufficient conditions for and, separately, .  That is, fill in the blanks: _________ and _________.   Justify your answers.    We have and An acceptable alternative would be: . Make sure students are aware of this! .  Note that .  Similarly, suppose . Then , so . Conversely, if , then there is some such that , and thus for all , .  Note that this means that if we want to know if , it's enough to check that .    Principal ideals may have more than one generator.    Let be a ring and . Then , where is any unit of .    Apply the answer to the question.      In , describe the principal ideals generated by   2         9    0    27    3     Determine the subset relations among the above ideals.      All multiples of 2    All multiples of     All multiples of 9; same as the previous part.         All multiples of 27    All multiples of 3    We have . The ideal only contains , which is a subset of all ideals.    It is the case in many familiar settings that all ideals are principal. Such domains are given a special name.    An integral domain in which every ideal is principal is known as a principal ideal domain (PID) .      The ring is a principal ideal domain.    Use properties specific to , perhaps from Section .     Let be an ideal. If , then , so suppose there is some nonzero . Define . Note that , as if , also.  By WOP, has a least element, call it .   Claim:  .  It is clear that . Now let be nonzero, and write using the division algorithm. Observe that , but as and , we must have . To avoid contradicting the WOP, we must have . Thus, and .     Find an integer such that , if                        You do not need to prove that each of the sets above are ideals (though you should make sure you can do it).    We see:                            Let be a principal ideal domain and be not both zero. Let . Then:    is an ideal, so there is some for which ;     is a greatest common divisor of and .     We conclude that there exist such that .     Observe that . Additionally, if , then , and . Thus, is an ideal.  Since is a PID, there exists such that . We claim that is a GCD of and .  It is clear that , as . Similarly, .  Now let be a common divisor of and . We wish to show that . Write and . Since , there exist such that , and thus .  In particular, there exist such that a GCD of and can be written as .   We have so far abstracted and axiomatized several important algebraic properties of that we discussed in § . In particular, we have our usual operations of addition and multiplication, and their interactions; we have notions of divisibility\/factorization, irreducibility, and primality; we also have cancellation and greatest common divisors.  Our last major abstraction from is the division algorithm. The main obstacle to postulating domains with a division algorithm is a clear notion of comparison relations. That is, if is an arbitrary domain with , is it possible to clearly and sensibly say which of or is bigger ? (Recall that this was a requirement for the division algorithm with nonzero remainders.) However, if there is a way to relate elements of a domain to , we can sensibly define a division algorithm.    Let be an integral domain. We call a Euclidean domain if there is a function such that: This is the lowercase Greek letter delta .    If , then .    If , , then there exist such that , where either or .     We call the function a norm for .    Thus, a Euclidean domain is an integral domain with a division algorithm that behaves in a familiar way. In the remainder of this section, we will investigate the properties of Euclidean domains. First, we consider some examples.    The field is a Euclidean domain under ordinary addition and multiplication, with for all .   TBD.     Is a Euclidean domain? If so, what is the norm function , and why does this function have the required properties of a norm?    Yes. The norm is the absolute value function.      Let be a field and a set containing a nonzero polynomial. Prove that contains a polynomial such that for all nonzero .     Let . Since contains a nonzero polynomial, . By WOP, contains a minimal element , which must be the degree of some polynomial in .     Let be a field and with . If , and and , then has degree strictly less than .     The leading term of is , while the leading term of is . Thus, the leading term of has degree less than .    (Polynomial Division Algorithm)  See the CCSS for more.   Let be a field and with . Then there exist unique such that , where .    For existence, consider three cases: ; and ; and . In the last case, use induction on . For uniqueness, mimic the uniqueness proof of Theorem .      Existence: If , then and will do. If and , then and will suffice. Thus, we need only consider the case in which and . We use induction on .  When , , and as , both and are nonzero constants. Then and will work.  Now assume and exist whenever . Assume and write and . Use Lemma and set , which must have degree less than . Thus, by induction, there exist such that , with or .  We therefore have , where and have the desired properties.   Uniqueness: Suppose and , where both have the desired properties. Then , or . Thus either , or has degree at least . The latter is clearly impossible, so and .     Let be a field. Then the ring is a principal ideal domain.    Mimic the proof of Theorem and use Lemma !     Let be a nonzero ideal of and let be a polynomial of smallest degree. We claim .  Clearly .  Let and use Theorem to write , where or . As in Theorem , write , so we must have that . Thus, and .     Is a Euclidean domain for all fields ? If so, what is the norm function , and why does this function have the required properties of a norm? If not, why not? Prove your answer.    Yes. It's the degree function.    In fact, every Euclidean domain is a PID.    Every Euclidean domain is a principal ideal domain.    Mimic the proof of Theorem .    Let be a euclidean domain, and an ideal of . If , then is principal, so assume that .  Define . Then the Well-Ordering Principle guarantees that has a least element. Let be such that is minimal. We claim that .  Clearly . Now assume that , and write , where either or and . If , then , contradicting the minimality of . Thus, , and .  Therefore, is a PID.      Where do Euclidean domains and PIDs fit in the hierarchy of abstraction found in Question ?    "
},
{
  "id": "def-ideal",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#def-ideal",
  "type": "Definition",
  "number": "2.4.1",
  "title": "",
  "body": "  A subset of a (not necessarily commutative) ring is called an ideal if:        for all , ; and,    for all and for all , and .      "
},
{
  "id": "theorem-34",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#theorem-34",
  "type": "Theorem",
  "number": "2.4.2",
  "title": "",
  "body": "  Let be a ring. Then and are ideals of .   "
},
{
  "id": "theorem-35",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#theorem-35",
  "type": "Theorem",
  "number": "2.4.3",
  "title": "",
  "body": "  All ideals are subrings.   "
},
{
  "id": "proof-37",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#proof-37",
  "type": "Proof",
  "number": "2.4.1",
  "title": "",
  "body": " It is straightforward to check that all conditions of Theorem are satisfied.  "
},
{
  "id": "theorem-36",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#theorem-36",
  "type": "Theorem",
  "number": "2.4.4",
  "title": "",
  "body": "  Let be a ring and an ideal of . Then if and only if contains a unit of .   "
},
{
  "id": "proof-38",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#proof-38",
  "type": "Proof",
  "number": "2.4.2",
  "title": "",
  "body": " If , will do.  If there is a unit , then given any , , so .  "
},
{
  "id": "theorem-37",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#theorem-37",
  "type": "Theorem",
  "number": "2.4.5",
  "title": "",
  "body": "  Let be commutative with identity and let . The set is an ideal (called the principal ideal generated by ).   "
},
{
  "id": "proof-39",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#proof-39",
  "type": "Proof",
  "number": "2.4.3",
  "title": "",
  "body": " Observe that .  Moreover, if , . Finally, if and , .  Thus, is an ideal.  "
},
{
  "id": "investigation-19",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#investigation-19",
  "type": "Investigation",
  "number": "2.4.6",
  "title": "",
  "body": "  Let be commutative with identity, and let . Give necessary and sufficient conditions for and, separately, .  That is, fill in the blanks: _________ and _________.   Justify your answers.    We have and An acceptable alternative would be: . Make sure students are aware of this! .  Note that .  Similarly, suppose . Then , so . Conversely, if , then there is some such that , and thus for all , .  Note that this means that if we want to know if , it's enough to check that .   "
},
{
  "id": "theorem-38",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#theorem-38",
  "type": "Theorem",
  "number": "2.4.7",
  "title": "",
  "body": "  Let be a ring and . Then , where is any unit of .    Apply the answer to the question.   "
},
{
  "id": "activity-11",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#activity-11",
  "type": "Activity",
  "number": "2.4.8",
  "title": "",
  "body": "  In , describe the principal ideals generated by   2         9    0    27    3     Determine the subset relations among the above ideals.      All multiples of 2    All multiples of     All multiples of 9; same as the previous part.         All multiples of 27    All multiples of 3    We have . The ideal only contains , which is a subset of all ideals.   "
},
{
  "id": "definition-27",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#definition-27",
  "type": "Definition",
  "number": "2.4.9",
  "title": "",
  "body": "  An integral domain in which every ideal is principal is known as a principal ideal domain (PID) .   "
},
{
  "id": "thm_ZisPID",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#thm_ZisPID",
  "type": "Theorem",
  "number": "2.4.10",
  "title": "",
  "body": "  The ring is a principal ideal domain.    Use properties specific to , perhaps from Section .   "
},
{
  "id": "proof-41",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#proof-41",
  "type": "Proof",
  "number": "2.4.4",
  "title": "",
  "body": " Let be an ideal. If , then , so suppose there is some nonzero . Define . Note that , as if , also.  By WOP, has a least element, call it .   Claim:  .  It is clear that . Now let be nonzero, and write using the division algorithm. Observe that , but as and , we must have . To avoid contradicting the WOP, we must have . Thus, and .  "
},
{
  "id": "activity-12",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#activity-12",
  "type": "Activity",
  "number": "2.4.11",
  "title": "",
  "body": "  Find an integer such that , if                        You do not need to prove that each of the sets above are ideals (though you should make sure you can do it).    We see:                         "
},
{
  "id": "theorem-40",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#theorem-40",
  "type": "Theorem",
  "number": "2.4.12",
  "title": "",
  "body": "  Let be a principal ideal domain and be not both zero. Let . Then:    is an ideal, so there is some for which ;     is a greatest common divisor of and .     We conclude that there exist such that .   "
},
{
  "id": "proof-42",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#proof-42",
  "type": "Proof",
  "number": "2.4.5",
  "title": "",
  "body": " Observe that . Additionally, if , then , and . Thus, is an ideal.  Since is a PID, there exists such that . We claim that is a GCD of and .  It is clear that , as . Similarly, .  Now let be a common divisor of and . We wish to show that . Write and . Since , there exist such that , and thus .  In particular, there exist such that a GCD of and can be written as .  "
},
{
  "id": "definition-28",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#definition-28",
  "type": "Definition",
  "number": "2.4.13",
  "title": "",
  "body": "  Let be an integral domain. We call a Euclidean domain if there is a function such that: This is the lowercase Greek letter delta .    If , then .    If , , then there exist such that , where either or .     We call the function a norm for .   "
},
{
  "id": "theorem-41",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#theorem-41",
  "type": "Theorem",
  "number": "2.4.14",
  "title": "",
  "body": "  The field is a Euclidean domain under ordinary addition and multiplication, with for all .   TBD.  "
},
{
  "id": "investigation-20",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#investigation-20",
  "type": "Investigation",
  "number": "2.4.15",
  "title": "",
  "body": "  Is a Euclidean domain? If so, what is the norm function , and why does this function have the required properties of a norm?    Yes. The norm is the absolute value function.   "
},
{
  "id": "lem_minimaldegreepoly",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#lem_minimaldegreepoly",
  "type": "Lemma",
  "number": "2.4.16",
  "title": "",
  "body": "  Let be a field and a set containing a nonzero polynomial. Prove that contains a polynomial such that for all nonzero .   "
},
{
  "id": "proof-44",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#proof-44",
  "type": "Proof",
  "number": "2.4.6",
  "title": "",
  "body": " Let . Since contains a nonzero polynomial, . By WOP, contains a minimal element , which must be the degree of some polynomial in .  "
},
{
  "id": "lem_polydivalglem",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#lem_polydivalglem",
  "type": "Lemma",
  "number": "2.4.17",
  "title": "",
  "body": "  Let be a field and with . If , and and , then has degree strictly less than .   "
},
{
  "id": "proof-45",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#proof-45",
  "type": "Proof",
  "number": "2.4.7",
  "title": "",
  "body": " The leading term of is , while the leading term of is . Thus, the leading term of has degree less than .  "
},
{
  "id": "theorem_polydivalg",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#theorem_polydivalg",
  "type": "Theorem",
  "number": "2.4.18",
  "title": "(Polynomial Division Algorithm).",
  "body": " (Polynomial Division Algorithm)  See the CCSS for more.   Let be a field and with . Then there exist unique such that , where .    For existence, consider three cases: ; and ; and . In the last case, use induction on . For uniqueness, mimic the uniqueness proof of Theorem .   "
},
{
  "id": "proof-46",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#proof-46",
  "type": "Proof",
  "number": "2.4.8",
  "title": "",
  "body": "  Existence: If , then and will do. If and , then and will suffice. Thus, we need only consider the case in which and . We use induction on .  When , , and as , both and are nonzero constants. Then and will work.  Now assume and exist whenever . Assume and write and . Use Lemma and set , which must have degree less than . Thus, by induction, there exist such that , with or .  We therefore have , where and have the desired properties.   Uniqueness: Suppose and , where both have the desired properties. Then , or . Thus either , or has degree at least . The latter is clearly impossible, so and .  "
},
{
  "id": "theorem-43",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#theorem-43",
  "type": "Theorem",
  "number": "2.4.19",
  "title": "",
  "body": "  Let be a field. Then the ring is a principal ideal domain.    Mimic the proof of Theorem and use Lemma !   "
},
{
  "id": "proof-47",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#proof-47",
  "type": "Proof",
  "number": "2.4.9",
  "title": "",
  "body": " Let be a nonzero ideal of and let be a polynomial of smallest degree. We claim .  Clearly .  Let and use Theorem to write , where or . As in Theorem , write , so we must have that . Thus, and .  "
},
{
  "id": "investigation-21",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#investigation-21",
  "type": "Investigation",
  "number": "2.4.20",
  "title": "",
  "body": "  Is a Euclidean domain for all fields ? If so, what is the norm function , and why does this function have the required properties of a norm? If not, why not? Prove your answer.    Yes. It's the degree function.   "
},
{
  "id": "thm_edispid",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#thm_edispid",
  "type": "Theorem",
  "number": "2.4.21",
  "title": "",
  "body": "  Every Euclidean domain is a principal ideal domain.    Mimic the proof of Theorem .    Let be a euclidean domain, and an ideal of . If , then is principal, so assume that .  Define . Then the Well-Ordering Principle guarantees that has a least element. Let be such that is minimal. We claim that .  Clearly . Now assume that , and write , where either or and . If , then , contradicting the minimality of . Thus, , and .  Therefore, is a PID.   "
},
{
  "id": "exploration-18",
  "level": "2",
  "url": "SubSec-Principal-Ideals.html#exploration-18",
  "type": "Exploration",
  "number": "2.4.22",
  "title": "",
  "body": "  Where do Euclidean domains and PIDs fit in the hierarchy of abstraction found in Question ?   "
},
{
  "id": "SubSec-Factoring-Polynomials",
  "level": "1",
  "url": "SubSec-Factoring-Polynomials.html",
  "type": "Section",
  "number": "3.1",
  "title": "Factoring Polynomials",
  "body": " Factoring Polynomials   Guiding Questions   In this section, we'll seek to answer the questions:  What properties of divisibility in extend to ?  What is an irreducible polynomial? Are there any tools we can use to determine if a given polynomial is irreducible?      One of the most beautiful consequences of an abstract study of algebra is the fact that both and are Euclidean domains. While they are not the same , we can expect them to share many of the same properties. In this section, our first goal will be to extend familiar properties from to . We will also see that particular features of a polynomial (e.g., its degree, or the existence of roots) allows for additional criteria for its irreducibility to be decided.  Since both and have a division algorithm, it is reasonable to expect that, similar to the integers, we can also investigate the greatest common divisor of polynomials. In fact, our method for finding the greatest common divisor of two integers extends nicely to polynomials.    Given , state a conjecture that gives a means for finding . Prove your conjecture is correct.    The Euclidean algorithm! Apply the division algorithm for polynomials and mimic the proof of the Euclidean algorithm in .      Carefully state and prove a Bézout-like theorem (recall Theorem ) for polynomials in .    Let such that and are not both the zero polynomial. Then there exist polynomials such that .    One of the most useful things we can do with polynomials is evaluate them by plugging in elements from our coefficient set (or some superset that contains it) and performing the resulting arithmetic in an appropriate ring. We can make this completely rigorous using the language of functions: given a commutative ring and all polynomials , we define the function by . However, we will not belabor this point; instead, we will generally write in place of and appeal to our common notions of evaluating polynomials.  Given a polynomial , we have frequently been interested in finding all for which .     zero (of a polynomial)  root   Let be commutative with identity and suppose . We say is a zero or root of if .    When considering polynomials with integer coefficients, any rational roots are particularly well-behaved.    Let with . If such that , and , then and .   TBD.     Use to find the possible rational roots of . Which of the possibilities you found are actually roots? Justify.    TBD.     gave a condition to check to see if polynomials in had roots in . However, the lack of a rational root for a polynomial is not sufficient to say that a polynomial is irreducible in according to .    Find a polynomial that has no roots in but is nonetheless reducible over .    Any polynomial with a nonunit integer factor will do, such as .    To simplify matters, we will focus henceforth on polynomials with coefficients in a field. The following theorem is a result that you learned in high school algebra (and have likely used countless times since then), but as with the other familiar topics we have explored so far, it is necessary to formalize prior to continuing.   Factor Theorem   Let be a field, and . Then is a root of if and only if divides .    If divides , then and , so is a root.  Otherwise, use the division algorithm to divide by . Then , where . Thus, is a nonzero constant. If is a root of , then , so and .    Note that while is a ring, and we already have a definition of an irreducible element of a ring, we will find it useful to have a ready definition of irreducible in the context of polynomials with coefficients in a field. It is to that task that we now turn.   irreducible (polynomial)   Given a field , define an irreducible element of , keeping in view Theorem and Definition . What are the units in ?     An irreducible polynomial is a nonzero nonconstant such that whenever , where , either or is a nonzero constant.     reducible (polynomial)   A polynomial is reducible if it is not irreducible.      State a positive definition for a reducible polynomial with coefficients in a field . That is, state a definition which does not refer to the notion of irreducibility.    A polynomial is reducible if it can be written as , where and .      Every polynomial of degree 1 in is irreducible.    Let be degree 1 and write . Then . Since , one of or is 0, hence or is constant.      A nonconstant polynomial of degree 2 or 3 is irreducible over if and only if it has no zeros in .    We prove the double contrapositive: of degree 2 or 3 is reducible if and only if it has a zero in .  If is reducible there exist nonconstant such that . Since or 3, one of or has degree 1, and is thus of the form , where . Thus, has a zero.  Similarly, if has a zero , , where . Thus, is reducible over .    The preceding theorems allow us to explore the (ir)reducibility of polynomials of small degree with coefficients in any field .    Determine which of the following polynomials are irreducible over the given fields. Justify your answer.    Over :   ,  ,  ,  ,  .    Over :   ,  ,  ,  ,  ,  ,  .       TBD.    As the following theorem illustrates, in , all irreducibles are primes.    Let be a field and such that is irreducible and divides . Then divides or divides .    Assume does not divede . Then and . Multiplying by yields which implies that divides (since divides ) .    We next state the Fundamental Theorem of Algebra. Despite its name, its proof relies on analytic properties of the real numbers; there is no purely algebraic proof. Moreover, it is not essential for the work we do in following sections, but given its close relationship to the question of factorization, we include it here for completeness.   Fundamental Theorem of Algebra  Fundamental Theorem of Algebra   Every nonconstant polynomial with coefficients in has a root in .    We conclude with one consequence of the Fundamental Theorem of Algebra.    Every nonconstant polynomial in can be written as a product of linear polynomials.    What are the irreducibles in ?     Induction on degree of polynomial using previous theorem.   Thus, the multiplicative structure of is straightforward: everything can be factored as a product of linear polynomials. Fields of coefficients like for which this is true are said to be algebraically closed ; not all fields satisfy this property. For instance, does not factor into a product of linear polynomials. Consequently, is not algebraically closed.  However, regardless of whether our field is algebraically closed, we have not yet determined that any can be factored uniquely into a product of irreducibles, or even that such factorizations into irreducibles exist. In , we do just that.  "
},
{
  "id": "investigation-22",
  "level": "2",
  "url": "SubSec-Factoring-Polynomials.html#investigation-22",
  "type": "Investigation",
  "number": "3.1.1",
  "title": "",
  "body": "  Given , state a conjecture that gives a means for finding . Prove your conjecture is correct.    The Euclidean algorithm! Apply the division algorithm for polynomials and mimic the proof of the Euclidean algorithm in .   "
},
{
  "id": "investigation-23",
  "level": "2",
  "url": "SubSec-Factoring-Polynomials.html#investigation-23",
  "type": "Investigation",
  "number": "3.1.2",
  "title": "",
  "body": "  Carefully state and prove a Bézout-like theorem (recall Theorem ) for polynomials in .    Let such that and are not both the zero polynomial. Then there exist polynomials such that .   "
},
{
  "id": "definition-29",
  "level": "2",
  "url": "SubSec-Factoring-Polynomials.html#definition-29",
  "type": "Definition",
  "number": "3.1.3",
  "title": "",
  "body": " zero (of a polynomial)  root   Let be commutative with identity and suppose . We say is a zero or root of if .   "
},
{
  "id": "thm-rational-root",
  "level": "2",
  "url": "SubSec-Factoring-Polynomials.html#thm-rational-root",
  "type": "Theorem",
  "number": "3.1.4",
  "title": "",
  "body": "  Let with . If such that , and , then and .   TBD.  "
},
{
  "id": "activity-13",
  "level": "2",
  "url": "SubSec-Factoring-Polynomials.html#activity-13",
  "type": "Activity",
  "number": "3.1.5",
  "title": "",
  "body": "  Use to find the possible rational roots of . Which of the possibilities you found are actually roots? Justify.    TBD.   "
},
{
  "id": "activity-14",
  "level": "2",
  "url": "SubSec-Factoring-Polynomials.html#activity-14",
  "type": "Activity",
  "number": "3.1.6",
  "title": "",
  "body": "  Find a polynomial that has no roots in but is nonetheless reducible over .    Any polynomial with a nonunit integer factor will do, such as .   "
},
{
  "id": "theorem-46",
  "level": "2",
  "url": "SubSec-Factoring-Polynomials.html#theorem-46",
  "type": "Theorem",
  "number": "3.1.7",
  "title": "Factor Theorem.",
  "body": " Factor Theorem   Let be a field, and . Then is a root of if and only if divides .    If divides , then and , so is a root.  Otherwise, use the division algorithm to divide by . Then , where . Thus, is a nonzero constant. If is a root of , then , so and .   "
},
{
  "id": "exploration-19",
  "level": "2",
  "url": "SubSec-Factoring-Polynomials.html#exploration-19",
  "type": "Exploration",
  "number": "3.1.8",
  "title": "",
  "body": " irreducible (polynomial)   Given a field , define an irreducible element of , keeping in view Theorem and Definition . What are the units in ?     An irreducible polynomial is a nonzero nonconstant such that whenever , where , either or is a nonzero constant.   "
},
{
  "id": "definition-30",
  "level": "2",
  "url": "SubSec-Factoring-Polynomials.html#definition-30",
  "type": "Definition",
  "number": "3.1.9",
  "title": "",
  "body": " reducible (polynomial)   A polynomial is reducible if it is not irreducible.   "
},
{
  "id": "exploration-20",
  "level": "2",
  "url": "SubSec-Factoring-Polynomials.html#exploration-20",
  "type": "Exploration",
  "number": "3.1.10",
  "title": "",
  "body": "  State a positive definition for a reducible polynomial with coefficients in a field . That is, state a definition which does not refer to the notion of irreducibility.    A polynomial is reducible if it can be written as , where and .   "
},
{
  "id": "theorem-47",
  "level": "2",
  "url": "SubSec-Factoring-Polynomials.html#theorem-47",
  "type": "Theorem",
  "number": "3.1.11",
  "title": "",
  "body": "  Every polynomial of degree 1 in is irreducible.    Let be degree 1 and write . Then . Since , one of or is 0, hence or is constant.   "
},
{
  "id": "theorem-48",
  "level": "2",
  "url": "SubSec-Factoring-Polynomials.html#theorem-48",
  "type": "Theorem",
  "number": "3.1.12",
  "title": "",
  "body": "  A nonconstant polynomial of degree 2 or 3 is irreducible over if and only if it has no zeros in .    We prove the double contrapositive: of degree 2 or 3 is reducible if and only if it has a zero in .  If is reducible there exist nonconstant such that . Since or 3, one of or has degree 1, and is thus of the form , where . Thus, has a zero.  Similarly, if has a zero , , where . Thus, is reducible over .   "
},
{
  "id": "activity-15",
  "level": "2",
  "url": "SubSec-Factoring-Polynomials.html#activity-15",
  "type": "Activity",
  "number": "3.1.13",
  "title": "",
  "body": "  Determine which of the following polynomials are irreducible over the given fields. Justify your answer.    Over :   ,  ,  ,  ,  .    Over :   ,  ,  ,  ,  ,  ,  .       TBD.   "
},
{
  "id": "theorem-49",
  "level": "2",
  "url": "SubSec-Factoring-Polynomials.html#theorem-49",
  "type": "Theorem",
  "number": "3.1.14",
  "title": "",
  "body": "  Let be a field and such that is irreducible and divides . Then divides or divides .    Assume does not divede . Then and . Multiplying by yields which implies that divides (since divides ) .   "
},
{
  "id": "theorem-50",
  "level": "2",
  "url": "SubSec-Factoring-Polynomials.html#theorem-50",
  "type": "Theorem",
  "number": "3.1.15",
  "title": "",
  "body": "  Every nonconstant polynomial in can be written as a product of linear polynomials.    What are the irreducibles in ?   "
},
{
  "id": "proof-54",
  "level": "2",
  "url": "SubSec-Factoring-Polynomials.html#proof-54",
  "type": "Proof",
  "number": "3.1.1",
  "title": "",
  "body": " Induction on degree of polynomial using previous theorem.  "
},
{
  "id": "p-596",
  "level": "2",
  "url": "SubSec-Factoring-Polynomials.html#p-596",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "algebraically closed "
},
{
  "id": "SubSec-Factorization-in-Euclidean-Domains",
  "level": "1",
  "url": "SubSec-Factorization-in-Euclidean-Domains.html",
  "type": "Section",
  "number": "3.2",
  "title": "Factorization in Euclidean Domains",
  "body": " Factorization in Euclidean Domains   Guiding Questions   In this section, we'll seek to answer the questions:  What is a unique factorization domain? What examples of UFDs do we possess?  What is the ascending chain condition on ideals? What are Noetherian rings?  What does the ascending chain condition have to do with unique factorization?       In this section, our explorations of the structural arithmetic properties that guarantee unique factorization culminate in . Specifically, we'll see that all Euclidean domains possess the unique factorization property. To prove this theorem, we will rely in part on an interesting property of chains of ideals in Euclidean domains.    Unique Factorization Domains  We begin by describing exactly what we mean by unique factorization. The reader may find it helpful to compare to The Fundamental Theorem of Arithmetic .   unique factorization domain (UFD)   An integral domain is called a unique factorization domain (or UFD ) if the following conditions hold.   Every nonzero nonunit element of is either irreducible or can be written as a finite product of irreducibles in .    Factorization into irreducibles is unique up to associates. That is, if can be written as for some irreducibles , then and, after reordering, is an associate of .         Using as an example, illustrate the definition of UFD by factoring 20 into two sets of different irreducibles which nonetheless can be paired up as associates.    We are already familiar with several examples.    The integers form a UFD.   We have already seen that primes and irreducibles coincide in (see and ). The result follows from the Fundamental Theorem of Algebra.     Every field is a UFD.   There are no nonzero nonunits in a field. The UFD conditions are therefore trivially satisfied.     The Ascending Chain Condition and Noetherian Rings  We now set our sights on a proof of . In order to prove it, we will make use of an important property of ideals in Euclidean domains. First, a definition.    A commutative ring is called Noetherian if it satisfies the ascending chain condition on ideals. These rings are named in honor of Emmy Noether , one of the preeminent mathematicians of the 20th century. In addition to making substantial contributions to physics, she formalized the axiomatic definition of ring that is still in use today. That is, is Noetherian if whenever is an ascending chain of ideals in , then there exists some for which .      Consider the ideals in and . Find the longest ascending chains of ideals starting first with and then with that you can. When does each chain stabilize?   TBD.   We next show that every PID is Noetherian.    Every principal ideal domain is Noetherian.    Let and set . Show that is an ideal, and use your assumptions!    It is a straightforward definition check to see that as defined in the hint is an ideal. That we are in a PID means there exists such that . Therefore there exists such that . It follows that and in particular that for all .      Every Euclidean domain is Noetherian.    Every ED is a PID.      Euclidean Domains are UFDs  We now begin collecting results to prove that every Euclidean domain is a UFD. The first condition in the UFD definition is that every nonzero nonunit factors as a product of irreducibles. We first show that every nonzero nonunit is divisible by at least one irreducible ( ), which we apply to show that every nonzero nonunit can be written as a finite product of irreducibles ( ).    Let be a principal ideal domain, and a nonzero nonunit. Then is divisible by an irreducible.    Let be reducible and write . Continue to factor reducibles and build an ascending chain of ideals.    Suppose that is not irreducible. Write , where the are nonzero nonunits. Then . If is not irreducible, we may write , where are nonzero nonunits, and observe that .  (If  is irreducible and we nonetheless write , then either if is a unit, or if is associate to .)  Continuing in this way, we may continue to factor the reducible factors of ; since is a PID and thus has the ascending chain condition, we must eventually reach a point where the chain stabilizes, i.e., that we have found an irreducible factor of .      Let be a PID. Then every nonzero nonunit element of is either irreducible or can be written as a finite product of irreducibles in .    We may perform the analysis from Lemma for all factors of , and thus can be factored into a product of irreducibles.    The second condition that must be satisfied for a domain to be a UFD is that the product of irreducibles must be unique (up to associates). In order to prove that, we will make use of , which states that in PIDs, primes and irreducibles are identical concepts.    Let be a PID and let be irreducible. Let be such that . Then and thus there exist such that .    Assume that is irreducible. Suppose that divides for some and that does not divide . Since is a PID, . Thus there exists such that .      Let be a PID and let . Then is prime if and only if is irreducible.    Assume that is prime. Suppose that for some . Then divides which implies that divides or divides . WLOG, assume that divides . Then there exists such that which implies that . Therefore and is a unit which implies that is irreducible.  Assume that is irreducible. Suppose that divides for some and that does not divide . Then and there exists such that . Multiplying boths sides by yiels which implies that divides and therefore is prime.    Observe that implies that if is a PID and is irreducible with , then or .   Our crucial final step on the road to is the following.    Every PID is a UFD.   For part 2 of the definition, use induction on the number of irreducible divisors of an arbitrary nonzero nonunit. Mimic the proof of .   Let be a PID, and observe that by every nonzero nonunit can be written as a product of irreducibles. We thus need only show that this product is unique (up to associates).  To that end, we adopt the notation of . Let . We perform induction on the number of irreducible factors of . If , then is a unit. If we had for some irreducible , then divides a unit and would thus be a unit itself, which is a contradiction.  Suppose now that and we write where the and are not necessarily distinct irreducibles. Since , we know by that must divide one of the factors.  Renumbering, we may assume that , whence , where must be a unit as is irreducible. Canceling yields By induction on we conclude that each of the irreducible factors on the left matches with precisely one factor on the right (up to associates). This completes the inductive step, and thus the proof.       Every Euclidean domain is a unique factorization domain.     Apply Theorems and .    (Unique Factorization of Polynomials)   Let be a field. Then is a UFD.  That is, if with , then is either irreducible or a product of irreducibles in . What is more, if are two factorizations of into irreducibles , then and after reordering, and are associates.    Handle existence and uniqueness separately. For each, (strong) induction on will work. Or do something entirely different.    Thus, we see that the existence of a well-behaved division algorithm (and a lack of zero divisors) is sufficient to guarantee unique factorization. However, it is not necessary. The following theorem is included for reference, but is not intended to be proved.   Theorem  If is a UFD, then is a UFD.    Thus, is a UFD. That is, every nonconstant polynomial in is either irreducible or can be factored uniquely into a product of irreducibles. However, as we will see later, is not a PID.   "
},
{
  "id": "def-ufd",
  "level": "2",
  "url": "SubSec-Factorization-in-Euclidean-Domains.html#def-ufd",
  "type": "Definition",
  "number": "3.2.1",
  "title": "",
  "body": " unique factorization domain (UFD)   An integral domain is called a unique factorization domain (or UFD ) if the following conditions hold.   Every nonzero nonunit element of is either irreducible or can be written as a finite product of irreducibles in .    Factorization into irreducibles is unique up to associates. That is, if can be written as for some irreducibles , then and, after reordering, is an associate of .      "
},
{
  "id": "activity-16",
  "level": "2",
  "url": "SubSec-Factorization-in-Euclidean-Domains.html#activity-16",
  "type": "Activity",
  "number": "3.2.2",
  "title": "",
  "body": "  Using as an example, illustrate the definition of UFD by factoring 20 into two sets of different irreducibles which nonetheless can be paired up as associates.   "
},
{
  "id": "theorem-51",
  "level": "2",
  "url": "SubSec-Factorization-in-Euclidean-Domains.html#theorem-51",
  "type": "Theorem",
  "number": "3.2.3",
  "title": "",
  "body": "  The integers form a UFD.   We have already seen that primes and irreducibles coincide in (see and ). The result follows from the Fundamental Theorem of Algebra.  "
},
{
  "id": "theorem-52",
  "level": "2",
  "url": "SubSec-Factorization-in-Euclidean-Domains.html#theorem-52",
  "type": "Theorem",
  "number": "3.2.4",
  "title": "",
  "body": "  Every field is a UFD.   There are no nonzero nonunits in a field. The UFD conditions are therefore trivially satisfied.  "
},
{
  "id": "def-noetherian",
  "level": "2",
  "url": "SubSec-Factorization-in-Euclidean-Domains.html#def-noetherian",
  "type": "Definition",
  "number": "3.2.5",
  "title": "",
  "body": "  A commutative ring is called Noetherian if it satisfies the ascending chain condition on ideals. These rings are named in honor of Emmy Noether , one of the preeminent mathematicians of the 20th century. In addition to making substantial contributions to physics, she formalized the axiomatic definition of ring that is still in use today. That is, is Noetherian if whenever is an ascending chain of ideals in , then there exists some for which .   "
},
{
  "id": "exploration-21",
  "level": "2",
  "url": "SubSec-Factorization-in-Euclidean-Domains.html#exploration-21",
  "type": "Exploration",
  "number": "3.2.6",
  "title": "",
  "body": "  Consider the ideals in and . Find the longest ascending chains of ideals starting first with and then with that you can. When does each chain stabilize?   TBD.  "
},
{
  "id": "theorem-pidisnoetherian",
  "level": "2",
  "url": "SubSec-Factorization-in-Euclidean-Domains.html#theorem-pidisnoetherian",
  "type": "Theorem",
  "number": "3.2.7",
  "title": "",
  "body": "  Every principal ideal domain is Noetherian.    Let and set . Show that is an ideal, and use your assumptions!    It is a straightforward definition check to see that as defined in the hint is an ideal. That we are in a PID means there exists such that . Therefore there exists such that . It follows that and in particular that for all .   "
},
{
  "id": "corollary-3",
  "level": "2",
  "url": "SubSec-Factorization-in-Euclidean-Domains.html#corollary-3",
  "type": "Corollary",
  "number": "3.2.8",
  "title": "",
  "body": "  Every Euclidean domain is Noetherian.    Every ED is a PID.   "
},
{
  "id": "lem_divisiblebyirred",
  "level": "2",
  "url": "SubSec-Factorization-in-Euclidean-Domains.html#lem_divisiblebyirred",
  "type": "Lemma",
  "number": "3.2.9",
  "title": "",
  "body": "  Let be a principal ideal domain, and a nonzero nonunit. Then is divisible by an irreducible.    Let be reducible and write . Continue to factor reducibles and build an ascending chain of ideals.    Suppose that is not irreducible. Write , where the are nonzero nonunits. Then . If is not irreducible, we may write , where are nonzero nonunits, and observe that .  (If  is irreducible and we nonetheless write , then either if is a unit, or if is associate to .)  Continuing in this way, we may continue to factor the reducible factors of ; since is a PID and thus has the ascending chain condition, we must eventually reach a point where the chain stabilizes, i.e., that we have found an irreducible factor of .   "
},
{
  "id": "thm-writeasprodofirred",
  "level": "2",
  "url": "SubSec-Factorization-in-Euclidean-Domains.html#thm-writeasprodofirred",
  "type": "Theorem",
  "number": "3.2.10",
  "title": "",
  "body": "  Let be a PID. Then every nonzero nonunit element of is either irreducible or can be written as a finite product of irreducibles in .    We may perform the analysis from Lemma for all factors of , and thus can be factored into a product of irreducibles.   "
},
{
  "id": "lemma-6",
  "level": "2",
  "url": "SubSec-Factorization-in-Euclidean-Domains.html#lemma-6",
  "type": "Lemma",
  "number": "3.2.11",
  "title": "",
  "body": "  Let be a PID and let be irreducible. Let be such that . Then and thus there exist such that .    Assume that is irreducible. Suppose that divides for some and that does not divide . Since is a PID, . Thus there exists such that .   "
},
{
  "id": "thm-primesareirredinPID",
  "level": "2",
  "url": "SubSec-Factorization-in-Euclidean-Domains.html#thm-primesareirredinPID",
  "type": "Theorem",
  "number": "3.2.12",
  "title": "",
  "body": "  Let be a PID and let . Then is prime if and only if is irreducible.    Assume that is prime. Suppose that for some . Then divides which implies that divides or divides . WLOG, assume that divides . Then there exists such that which implies that . Therefore and is a unit which implies that is irreducible.  Assume that is irreducible. Suppose that divides for some and that does not divide . Then and there exists such that . Multiplying boths sides by yiels which implies that divides and therefore is prime.   "
},
{
  "id": "thm_pidisufd",
  "level": "2",
  "url": "SubSec-Factorization-in-Euclidean-Domains.html#thm_pidisufd",
  "type": "Theorem",
  "number": "3.2.13",
  "title": "",
  "body": "  Every PID is a UFD.   For part 2 of the definition, use induction on the number of irreducible divisors of an arbitrary nonzero nonunit. Mimic the proof of .   Let be a PID, and observe that by every nonzero nonunit can be written as a product of irreducibles. We thus need only show that this product is unique (up to associates).  To that end, we adopt the notation of . Let . We perform induction on the number of irreducible factors of . If , then is a unit. If we had for some irreducible , then divides a unit and would thus be a unit itself, which is a contradiction.  Suppose now that and we write where the and are not necessarily distinct irreducibles. Since , we know by that must divide one of the factors.  Renumbering, we may assume that , whence , where must be a unit as is irreducible. Canceling yields By induction on we conclude that each of the irreducible factors on the left matches with precisely one factor on the right (up to associates). This completes the inductive step, and thus the proof.    "
},
{
  "id": "theorem_everyedisufd",
  "level": "2",
  "url": "SubSec-Factorization-in-Euclidean-Domains.html#theorem_everyedisufd",
  "type": "Theorem",
  "number": "3.2.14",
  "title": "",
  "body": "  Every Euclidean domain is a unique factorization domain.   "
},
{
  "id": "proof-64",
  "level": "2",
  "url": "SubSec-Factorization-in-Euclidean-Domains.html#proof-64",
  "type": "Proof",
  "number": "3.2.3.1",
  "title": "",
  "body": " Apply Theorems and .  "
},
{
  "id": "theorem-58",
  "level": "2",
  "url": "SubSec-Factorization-in-Euclidean-Domains.html#theorem-58",
  "type": "Theorem",
  "number": "3.2.15",
  "title": "(Unique Factorization of Polynomials).",
  "body": " (Unique Factorization of Polynomials)   Let be a field. Then is a UFD.  That is, if with , then is either irreducible or a product of irreducibles in . What is more, if are two factorizations of into irreducibles , then and after reordering, and are associates.    Handle existence and uniqueness separately. For each, (strong) induction on will work. Or do something entirely different.   "
},
{
  "id": "SubSec-Nonunique-Factorization",
  "level": "1",
  "url": "SubSec-Nonunique-Factorization.html",
  "type": "Section",
  "number": "3.3",
  "title": "Nonunique Factorization",
  "body": " Nonunique Factorization   Guiding Questions   In this section, we'll seek to answer the questions:  How can unique factorization fail, and why does it matter?  What is an example of a nonatomic domain?  What is an example of an element that does not factor uniquely into a product of irreducibles?      Despite the evidence to the contrary, not every ring has the unique factorization property. That is, there are commutative rings with identity which are not UFDs. In fact, the failure of certain rings in algebraic number theory to have the unique factorization property played a role in several failed attempts to prove Fermat's Last Theorem, which says that there are no nontrivial integer solutions to the equation if . Pierre de Fermat famously claimed that he had a marvelous proof of this fact, but the margin of the book in which he was writing was too narrow to contain it. Fermat's supposed proof was never found, and many now doubt that he had one. The search for a valid proof would not be complete until the work of Andrew Wiles and Richard Taylor in the mid-1990s.  In 1847, Gabriel Lamé claimed he had completely solved the problem. His solution relied on the factorization of , where is an odd prime, as , where is a primitive -th root of unity in . However, the ring is not a unique factorization domain.  There are two ways that unique factorization in an integral domain can fail: there can be a failure of a nonzero nonunit to factor into irreducibles, or there can be nonassociate factorizations of the same element. We investigate each in turn.   A non-atomic domain   We say an integral domain is atomic if every nonzero nonunit can be written as a finite product of irreducibles in . The term atom was suggested by Paul Cohn as a synonym for irreducible. In this exploration, we encounter a non-atomic domain.  Let the set of polynomials with integer constant terms and rational coefficients.   Convince yourself that is an integral domain. You do not need to prove it in detail, but you should at least argue that is closed under the usual polynomial addition and multiplication, and that is a domain.  Describe the irreducibles in .  Use the notion of degree to argue that any factorization of in has the form   Explain why the factorization in the previous part cannot lead to a factorization of into irreducibles in .    TBD.   We now explore the atomic domain . As we will see, even when a nonzero nonunit can be written as a product of irreducibles, it may be the case that this factorization is not unique.    Verify that .    Next, we develop a multiplicative function which enables us to explore the multiplicative properties of .    Define by . Then for all , .      An element is a unit if and only if .     Observe that is a unit if and only if for some , which menas that , so .     There do not exist such that .     Suppose there exist such that . Then we must have , which means that , a contradiction.     The elements 2, , and are irreducible in . We conclude that is not a UFD.     Suppose . Then . By the lemma, we may not have , which means without loss of generality that , and thus is a unit. Therefore, 2 is irreducible.  Now suppose that . Then . The possible values for are 1, 2, 4, and 8. If or 8, then is irreducible, as either or is necessarily a unit. By the lemma, we may not have or , so in fact either or 8. Therefore, is irreducible.  Since we have factored 8 into two different products of irreducibles, is not a UFD.   "
},
{
  "id": "exploration-22",
  "level": "2",
  "url": "SubSec-Nonunique-Factorization.html#exploration-22",
  "type": "Exploration",
  "number": "3.3.1",
  "title": "A non-atomic domain.",
  "body": " A non-atomic domain   We say an integral domain is atomic if every nonzero nonunit can be written as a finite product of irreducibles in . The term atom was suggested by Paul Cohn as a synonym for irreducible. In this exploration, we encounter a non-atomic domain.  Let the set of polynomials with integer constant terms and rational coefficients.   Convince yourself that is an integral domain. You do not need to prove it in detail, but you should at least argue that is closed under the usual polynomial addition and multiplication, and that is a domain.  Describe the irreducibles in .  Use the notion of degree to argue that any factorization of in has the form   Explain why the factorization in the previous part cannot lead to a factorization of into irreducibles in .    TBD.  "
},
{
  "id": "activity-17",
  "level": "2",
  "url": "SubSec-Nonunique-Factorization.html#activity-17",
  "type": "Activity",
  "number": "3.3.2",
  "title": "",
  "body": "  Verify that .   "
},
{
  "id": "theorem-59",
  "level": "2",
  "url": "SubSec-Nonunique-Factorization.html#theorem-59",
  "type": "Theorem",
  "number": "3.3.3",
  "title": "",
  "body": "  Define by . Then for all , .   "
},
{
  "id": "theorem-60",
  "level": "2",
  "url": "SubSec-Nonunique-Factorization.html#theorem-60",
  "type": "Theorem",
  "number": "3.3.4",
  "title": "",
  "body": "  An element is a unit if and only if .   "
},
{
  "id": "proof-65",
  "level": "2",
  "url": "SubSec-Nonunique-Factorization.html#proof-65",
  "type": "Proof",
  "number": "3.3.1",
  "title": "",
  "body": " Observe that is a unit if and only if for some , which menas that , so .  "
},
{
  "id": "lemma-7",
  "level": "2",
  "url": "SubSec-Nonunique-Factorization.html#lemma-7",
  "type": "Lemma",
  "number": "3.3.5",
  "title": "",
  "body": "  There do not exist such that .   "
},
{
  "id": "proof-66",
  "level": "2",
  "url": "SubSec-Nonunique-Factorization.html#proof-66",
  "type": "Proof",
  "number": "3.3.2",
  "title": "",
  "body": " Suppose there exist such that . Then we must have , which means that , a contradiction.  "
},
{
  "id": "theorem-61",
  "level": "2",
  "url": "SubSec-Nonunique-Factorization.html#theorem-61",
  "type": "Theorem",
  "number": "3.3.6",
  "title": "",
  "body": "  The elements 2, , and are irreducible in . We conclude that is not a UFD.   "
},
{
  "id": "proof-67",
  "level": "2",
  "url": "SubSec-Nonunique-Factorization.html#proof-67",
  "type": "Proof",
  "number": "3.3.3",
  "title": "",
  "body": " Suppose . Then . By the lemma, we may not have , which means without loss of generality that , and thus is a unit. Therefore, 2 is irreducible.  Now suppose that . Then . The possible values for are 1, 2, 4, and 8. If or 8, then is irreducible, as either or is necessarily a unit. By the lemma, we may not have or , so in fact either or 8. Therefore, is irreducible.  Since we have factored 8 into two different products of irreducibles, is not a UFD.  "
},
{
  "id": "SubSec-Ideals-In-General",
  "level": "1",
  "url": "SubSec-Ideals-In-General.html",
  "type": "Section",
  "number": "4.1",
  "title": "Ideals in general",
  "body": " Ideals in general   Guiding Questions   In this section, we'll seek to answer the questions:  What operations can we perform on existing ideals to create new ideals?  How can we describe (non-principal) ideals in general?       Recall that one of the ways in which we understand a mathematical object is to study its relationship to other mathematical objects. In algebra, we learn about a ring by studying its relationship to other rings via functions (introduced in ) and to its ideals, introduced in .  The notion of an ideal number was first introduced by Ernst Kummer in the middle of the nineteenth century. Kummer was studying the cyclotomic integers in connection to work on Fermat's Last Theorem and reciprocity laws in number theory, and discovered, to use our modern terminology, that these rings of cyclotomic integers were not UFDs. In particular, he found irreducible cyclotomic integers that were not prime. His work, which was finished by Richard Dedekind by 1871, was to define a new class of complex number, an ideal number for which unique factorization into prime ideal numbers held. A related notion was developed by Kronecker and Lasker, before the two concepts were unified by David Hilbert and Emmy Noether into the more general version which we stated in .  In this section, we explore ways of describing non-principal ideals. We also explore properties of ideals, as well as their connections to other fields of mathematics.   We first explore the behavior of ideals under the usual set-theoretic operations of intersection and union.    Let be a ring and let be a family of ideals. Then is an ideal.    It is clear that . Moreover, if , then for all , so and thus . Finally, if and , for all , and thus .      Let be a ring and be ideals. Must be an ideal of ? Give a proof or counterexample of your assertion.    Given , , and , note that since , the union is not an ideal.    In addition to the set-theoretic properties described above, we can do arithmetic with ideals.    Let be a ring and ideals of . Then the sum of and , is an ideal of . Furthermore, the product of and , is an ideal of .   TBD.   When we studied principal ideals, we were able to describe the principal ideal in terms of a single generating element. However, not every ideal is principal (see the Challenge ). Still, we would like a way to more precisely describe the elements of such ideals; we begin with .    Let be a commutative ring with identity, and let be a subset. Then is called the ideal generated by ideal generated by a set , and we call the generating set for the ideal .    A consequence of is the following theorem.   Let be a ring. Then .   Observe that for all ideals in , . In particular, one of the ideals in the right-hand side of is the zero ideal. Since the zero ideal is a subset of all ideals, the theorem follows.    One way to interpret is that is the smallest ideal (with respect to subset inclusion) that contains .    Given a commutative ring and a subset of , is the smallest ideal containing in the sense that, if is any ideal of containing , .    Let be any ideal containing . Thus, is one of the ideals on the right-hand side of . Since is formed by the intersection of with other ideals, .    The concept elucidated by is helpful, but does not give us a handle on the structure of the elements of . Such a description is provided by .    Given a commutative ring with identity and a nonempty subset of :  The set is an ideal of ;   ; and   .       It is clear that , and that if and , . Moreover, the sum of two -linear combinations of elements of is yet another -linear combination of elements of . Thus, is an ideal. Further, if , , so . Therefore, .  Now assume that . Then has the form . Each , so each if is any ideal containing . In particular, , and thus the sum .    In other words, the ideal contains all possible finite -linear combinations of elements of ; that is, it contains all finite sums of products of ring elements with elements from .   If is a ring and is a finite subset of , the ideal generated by is denoted by , and we say is finitely generated ideal, finitely generated .     The ring is not a PID.   Consider the ideal .     Suppose that . Since , for some , so , and thus . We also have , so , which implies that , so for some . Then implies . Thus, or . In either case, is a unit in so . By Theorem , there are polynomials such that . If is the constant term of , it follows that the constant term of is , which is a contradiction.  Thus, is not principal.    Note that the set in need not be finite. However, in many familiar rings, every ideal will have a finite generating set, as the next theorem demonstrates.    Let be a ring. If is Noetherian Recall . , then every ideal of is finitely generated.   Consider an arbitrary ideal and inductively build an ascending chain of finitely generated ideals contained in .     Assume that is Noetherian. Inductively build an ascending chain of ideals as follows:  Let be arbitrary.  For all , let be arbitrary.  We thus obtain an ascending chain of ideals which must stabilize at . That is, at some point, , and since , we have .    In fact, we could have used the finite generation of ideals as the definition of Noetherian rings, as the two notions are equivalent. First, a lemma.    Let be a ring and an ascending chain of ideals. Then is an ideal.    Straightforward definition check. Nearly identical to .      Let be a ring such that every ideal of is finitely generated. Then is Noetherian.    Argue that the ideal defined in is a finitely generated ideal of , and use this to conclude that the ascending chain stabilizes.    Following the hint and , we have while for all . Since , for each , there is a satisfying . What is more, we may rename so that and thus Observe that this means that for all , so that . Thus, the chain stabilizes, and is Noetherian.    As one might expect, not every ring is Noetherian. However, most familiar rings are.    Show that the ring of polynomials in infinitely many variables over is not Noetherian either by exhibiting an ascending chain of ideals that never stabilizes, or an ideal without a finite generating set.    TBD.    We close with a discussion of a class of ideals which are the object of active mathematical research. Recall that a (simple) graph consists of a set of vertices together with a collection of edges , which are just pairs of vertices and can be written . This notation suggests the following definition.   Let be a field, a graph on the vertex set with edge set , and let be the ring of polynomials whose variables are the vertices of with coefficients in . Define the edge ideal ideal, edge of to be That is, is generated by the products of the variables corresponding to the edges of the graph.     Consider the graph in . List the generators of and an appropriate ring in which may live.      A graph .   As one might hope, we do not make merely for fun; given a graph , it is possible to relate the graph-theoretic properties of (e.g., the chromatic number) with the ideal-theoretic properties of . See and , among others, for more.   A. Van Tuyl, A Beginner's Guide to Edge and Cover Ideals , in Monomial Ideals, Computations, and Applications , Lecture Notes in Mathematics Volume 2083, 2013, pp 63-94  C. Bocci, S. Cooper, E. Guardo, et al., The Waldschmidt constant for squarefree monomial ideals , J Algebr Comb (2016) 44:875     "
},
{
  "id": "thm-idealintersection",
  "level": "2",
  "url": "SubSec-Ideals-In-General.html#thm-idealintersection",
  "type": "Theorem",
  "number": "4.1.1",
  "title": "",
  "body": "  Let be a ring and let be a family of ideals. Then is an ideal.    It is clear that . Moreover, if , then for all , so and thus . Finally, if and , for all , and thus .   "
},
{
  "id": "invest-idealunion",
  "level": "2",
  "url": "SubSec-Ideals-In-General.html#invest-idealunion",
  "type": "Investigation",
  "number": "4.1.2",
  "title": "",
  "body": "  Let be a ring and be ideals. Must be an ideal of ? Give a proof or counterexample of your assertion.    Given , , and , note that since , the union is not an ideal.   "
},
{
  "id": "theorem-63",
  "level": "2",
  "url": "SubSec-Ideals-In-General.html#theorem-63",
  "type": "Theorem",
  "number": "4.1.3",
  "title": "",
  "body": "  Let be a ring and ideals of . Then the sum of and , is an ideal of . Furthermore, the product of and , is an ideal of .   TBD.  "
},
{
  "id": "def_idealgeneration",
  "level": "2",
  "url": "SubSec-Ideals-In-General.html#def_idealgeneration",
  "type": "Definition",
  "number": "4.1.4",
  "title": "",
  "body": "  Let be a commutative ring with identity, and let be a subset. Then is called the ideal generated by ideal generated by a set , and we call the generating set for the ideal .   "
},
{
  "id": "theorem-64",
  "level": "2",
  "url": "SubSec-Ideals-In-General.html#theorem-64",
  "type": "Theorem",
  "number": "4.1.5",
  "title": "",
  "body": " Let be a ring. Then .   Observe that for all ideals in , . In particular, one of the ideals in the right-hand side of is the zero ideal. Since the zero ideal is a subset of all ideals, the theorem follows.   "
},
{
  "id": "theorem-smallestideal",
  "level": "2",
  "url": "SubSec-Ideals-In-General.html#theorem-smallestideal",
  "type": "Theorem",
  "number": "4.1.6",
  "title": "",
  "body": "  Given a commutative ring and a subset of , is the smallest ideal containing in the sense that, if is any ideal of containing , .    Let be any ideal containing . Thus, is one of the ideals on the right-hand side of . Since is formed by the intersection of with other ideals, .   "
},
{
  "id": "thm_idealgeneratingset",
  "level": "2",
  "url": "SubSec-Ideals-In-General.html#thm_idealgeneratingset",
  "type": "Theorem",
  "number": "4.1.7",
  "title": "",
  "body": "  Given a commutative ring with identity and a nonempty subset of :  The set is an ideal of ;   ; and   .       It is clear that , and that if and , . Moreover, the sum of two -linear combinations of elements of is yet another -linear combination of elements of . Thus, is an ideal. Further, if , , so . Therefore, .  Now assume that . Then has the form . Each , so each if is any ideal containing . In particular, , and thus the sum .   "
},
{
  "id": "definition-34",
  "level": "2",
  "url": "SubSec-Ideals-In-General.html#definition-34",
  "type": "Definition",
  "number": "4.1.8",
  "title": "",
  "body": " If is a ring and is a finite subset of , the ideal generated by is denoted by , and we say is finitely generated ideal, finitely generated .  "
},
{
  "id": "challenge-nonprincideal",
  "level": "2",
  "url": "SubSec-Ideals-In-General.html#challenge-nonprincideal",
  "type": "Challenge",
  "number": "4.1.9",
  "title": "",
  "body": "  The ring is not a PID.   Consider the ideal .     Suppose that . Since , for some , so , and thus . We also have , so , which implies that , so for some . Then implies . Thus, or . In either case, is a unit in so . By Theorem , there are polynomials such that . If is the constant term of , it follows that the constant term of is , which is a contradiction.  Thus, is not principal.   "
},
{
  "id": "theorem-67",
  "level": "2",
  "url": "SubSec-Ideals-In-General.html#theorem-67",
  "type": "Theorem",
  "number": "4.1.10",
  "title": "",
  "body": "  Let be a ring. If is Noetherian Recall . , then every ideal of is finitely generated.   Consider an arbitrary ideal and inductively build an ascending chain of finitely generated ideals contained in .     Assume that is Noetherian. Inductively build an ascending chain of ideals as follows:  Let be arbitrary.  For all , let be arbitrary.  We thus obtain an ascending chain of ideals which must stabilize at . That is, at some point, , and since , we have .   "
},
{
  "id": "lemma-ascendingchainideal",
  "level": "2",
  "url": "SubSec-Ideals-In-General.html#lemma-ascendingchainideal",
  "type": "Lemma",
  "number": "4.1.11",
  "title": "",
  "body": "  Let be a ring and an ascending chain of ideals. Then is an ideal.    Straightforward definition check. Nearly identical to .   "
},
{
  "id": "theorem-68",
  "level": "2",
  "url": "SubSec-Ideals-In-General.html#theorem-68",
  "type": "Theorem",
  "number": "4.1.12",
  "title": "",
  "body": "  Let be a ring such that every ideal of is finitely generated. Then is Noetherian.    Argue that the ideal defined in is a finitely generated ideal of , and use this to conclude that the ascending chain stabilizes.    Following the hint and , we have while for all . Since , for each , there is a satisfying . What is more, we may rename so that and thus Observe that this means that for all , so that . Thus, the chain stabilizes, and is Noetherian.   "
},
{
  "id": "exploration-23",
  "level": "2",
  "url": "SubSec-Ideals-In-General.html#exploration-23",
  "type": "Exploration",
  "number": "4.1.13",
  "title": "",
  "body": "  Show that the ring of polynomials in infinitely many variables over is not Noetherian either by exhibiting an ascending chain of ideals that never stabilizes, or an ideal without a finite generating set.    TBD.   "
},
{
  "id": "def-edge-ideal",
  "level": "2",
  "url": "SubSec-Ideals-In-General.html#def-edge-ideal",
  "type": "Definition",
  "number": "4.1.14",
  "title": "",
  "body": " Let be a field, a graph on the vertex set with edge set , and let be the ring of polynomials whose variables are the vertices of with coefficients in . Define the edge ideal ideal, edge of to be That is, is generated by the products of the variables corresponding to the edges of the graph.  "
},
{
  "id": "activity-18",
  "level": "2",
  "url": "SubSec-Ideals-In-General.html#activity-18",
  "type": "Activity",
  "number": "4.1.15",
  "title": "",
  "body": "  Consider the graph in . List the generators of and an appropriate ring in which may live.   "
},
{
  "id": "graph",
  "level": "2",
  "url": "SubSec-Ideals-In-General.html#graph",
  "type": "Figure",
  "number": "4.1.16",
  "title": "",
  "body": "  A graph .  "
},
{
  "id": "SubSec-Homomorphisms",
  "level": "1",
  "url": "SubSec-Homomorphisms.html",
  "type": "Section",
  "number": "4.2",
  "title": "Homomorphisms",
  "body": " Homomorphisms   Guiding Questions   In this section, we'll seek to answer the questions:  What is a ring homomorphism?  What are some examples of ring homomorphisms?       Central to modern mathematics is the notion of function This section assumes a familiarity with the idea of function from a set-theoretic point of view, as well as the concepts of injective (one-to-one), surjective (onto), and bijective functions (one-to-one correspondences). . Functions arise in all areas of mathematics, each subdiscipline concerned with certain types of functions. In algebra, our concern is with operation-preserving functions, such as the linear transformations of vector spaces you have seen in a course in linear algebra. Those linear transformations had the properties that (addition is preserved) and (scalar multiplication is preserved).  We find something similar at work in the study of homomorphisms of rings, which we define to be functions that preserve both addition and multiplication.     Let and be commutative rings with identity. A function is a called ring homomorphism if it preserves addition, multiplication, and sends the identity of to the identity of . That is, for all :  ,  , and  .  If is a bijection, we say that is an isomorphism and write . If is an isomorphism, we say is an automorphism of .    Our first job when glimpsing a new concept is to collect a stock of examples.    Determine whether the following functions are homomorphisms, isomorphisms, automorphisms, or none of these. Note that denotes an arbitrary commutative ring with identity and a field.   defined by  defined by  defined by  defined by  defined by , where  defined by  defined by , where if , is the expression obtained by plugging into : (this is known as the -evaluation map)  defined by     TBD Note that , and similarly for multiplication. We observe that is not an isomorphism, as .     Homomorphisms give rise to a particularly important class of subsets: kernels.    Let be a ring homomorphism. Then is the kernel of .      For each homomorphism in , find (with justification), the kernel.   TBD   In fact, kernels are not just important subsets of rings; they are ideals.    Given a ring homomorphism , is an ideal.    If , . Similarly, if and , .    Kernels also give a useful way of determining whether their defining homomorphisms are one-to-one.    Let be a homomorphism. Then is one-to-one if and only if .   TBD   "
},
{
  "id": "definition-36",
  "level": "2",
  "url": "SubSec-Homomorphisms.html#definition-36",
  "type": "Definition",
  "number": "4.2.1",
  "title": "",
  "body": "  Let and be commutative rings with identity. A function is a called ring homomorphism if it preserves addition, multiplication, and sends the identity of to the identity of . That is, for all :  ,  , and  .  If is a bijection, we say that is an isomorphism and write . If is an isomorphism, we say is an automorphism of .   "
},
{
  "id": "expl-homomorphism-examples",
  "level": "2",
  "url": "SubSec-Homomorphisms.html#expl-homomorphism-examples",
  "type": "Exploration",
  "number": "4.2.2",
  "title": "",
  "body": "  Determine whether the following functions are homomorphisms, isomorphisms, automorphisms, or none of these. Note that denotes an arbitrary commutative ring with identity and a field.   defined by  defined by  defined by  defined by  defined by , where  defined by  defined by , where if , is the expression obtained by plugging into : (this is known as the -evaluation map)  defined by     TBD Note that , and similarly for multiplication. We observe that is not an isomorphism, as .   "
},
{
  "id": "definition-37",
  "level": "2",
  "url": "SubSec-Homomorphisms.html#definition-37",
  "type": "Definition",
  "number": "4.2.3",
  "title": "",
  "body": "  Let be a ring homomorphism. Then is the kernel of .   "
},
{
  "id": "activity-19",
  "level": "2",
  "url": "SubSec-Homomorphisms.html#activity-19",
  "type": "Activity",
  "number": "4.2.4",
  "title": "",
  "body": "  For each homomorphism in , find (with justification), the kernel.   TBD  "
},
{
  "id": "theorem-69",
  "level": "2",
  "url": "SubSec-Homomorphisms.html#theorem-69",
  "type": "Theorem",
  "number": "4.2.5",
  "title": "",
  "body": "  Given a ring homomorphism , is an ideal.    If , . Similarly, if and , .   "
},
{
  "id": "theorem-70",
  "level": "2",
  "url": "SubSec-Homomorphisms.html#theorem-70",
  "type": "Theorem",
  "number": "4.2.6",
  "title": "",
  "body": "  Let be a homomorphism. Then is one-to-one if and only if .   TBD  "
},
{
  "id": "SubSec-Quotient-Rings",
  "level": "1",
  "url": "SubSec-Quotient-Rings.html",
  "type": "Section",
  "number": "4.3",
  "title": "Quotient Rings: New Rings from Old",
  "body": " Quotient Rings: New Rings from Old   Guiding Questions   In this section, we'll seek to answer the questions:  How can we use ideals to build new rings out of old?  What sorts of ideals allow us to build domains? Fields?  What is the First Isomorphism Theorem?       If the only rings that existed were polynomial rings, familiar systems of numbers like , and matrix rings, there would still be enough to justify defining the concept of a ring and exploring its properties. However, these are not the only rings that exist. In this section, we explore a way of building new rings from old by means of ideals. To better understand these new rings, we will also define two new classes of ideals: prime ideals, and maximal ideals. We end by briefly connecting these rings to a familiar problem from high school algebra.    Congruence modulo  The major concept of this section is the notion of congruence modulo . One can reasonably think of this idea as a generalization of congruence modulo in .   congruence mod   Let be a ring, an ideal of , and . We say is congruent to modulo if . If this is the case, we write .      Determine (with brief justification) whether in the following rings .   , , ,  , , ,  , , ,  , , ,  ( Challenge. ) , , ,    TBD last one: .     Given a ring , ideal , and , when is it the case that ?    When .    Observe that if , then there is some such that , and so .  As was the case in , congruence modulo is an equivalence relation.    Let be a ring and an ideal of . Then congruence modulo is an equivalence relation on .    Since , for all , so and the relation is reflexive.  Moreover, if , then , so the relation is symmetric.  If and , then , so the relation is transitive.    The set of equivalence classes under this relation is denoted . What is more, this is not merely a set of equivalence classes. As the next two theorems demonstrate, this set possesses two algebraic operations that extend naturally from those of .    Let be a ring and an ideal of . If such that and , then .    Suppose and . Then and . Adding, we have . Thus, .      Let be a ring and an ideal of . If such that and , then .    As before, we observe that and . Write and . Then , so , and thus .    The previous two theorems together show that addition and multiplication on the set is well-defined. As these operations are built on the operations of , it will likely not surprise you to learn that the usual axioms defining a ring also hold.   quotient ring   Let be a commutative ring with identity , an ideal of , and . The set of equivalence classes modulo , denoted , is a commutative ring (called the quotient ring of by ) with identity under the following operations:     These operations were shown to be well-defined in and .   Thus, given a ring and ideal of , we may build the quotient ring .    Answer the questions below. Be prepared to give an information justification of your thinking.   Suppose and . Calculate and .  Let and . List all elements of (there should be 9 in total).  Set and . Find an element such that .     In , we will explore the question of when possesses some of the properties we've previously explored, e.g., when is a domain? A field? First, we conclude with two explorations. The first gives us a sense of what these rings can look like. The second connects quotient rings to solution sets of polynomial equations.    Consider the ring and the ideals and .   List the elements of and .  What happens to in when you pass to the quotient ring ? How about as you pass from to ?  In view of your answer to the previous question, how does behave as you mod out by and ?  Build addition and multiplication tables for each of and .    TBD    graph (of a function)  zero set   One of the most useful connections made in high school algebra is the connection between a function (in particular, a polynomial function) and its graph . We may extend this notion to ideals via the concept of a zero set as follows.  Let be a field and with a nonzero ideal. We define the zero set of , denoted , as the set of all points for which for all .   Suppose . Prove that if and only if for each . Thus, can be determined entirely by examining the generators of .  Describe given .  (Challenge) Given and , describe and .  Given , describe the relationship between the variables and in the quotient . In what way have we restricted our polynomial inputs to the parabola ?    TBD.      Prime and Maximal Ideals  In this section, we continue our exploration of quotient rings by looking more closely at properties of ideals. We focus on particular properties of ideals that ensure that the quotient is either a domain or a field.   prime ideal  ideal (prime)   Let be commutative with identity and a nonzero ideal. We say is prime if whenever such that , we have or .      Let be a domain and be prime. Then is a prime ideal.   TBD     Which of the following ideals are prime?    in      in      in      in      in           Not prime. , but .    Prime. If , then and 11 is prime.    Prime. Easy explanation is that is isomorphic to . For now, though, we know that is irreducible, and is a PID, so irreducibles are prime.    Not prime. , but for degree reasons.    One may use the EA to show that , so . This is prime.       It is this precise condition that guarantees that the resulting quotient is a domain.    Let be commutative with identity and an ideal of . Then is prime if and only if is an integral domain.     Begin by assuming that is prime, and suppose . Then , and since is prime, either or . Thus either or .  Now assume that is a domain. Further, let be such that . Then , and since is a domain, or , i.e., or . Thus, is prime.   We now consider another important class of ideals: the maximal ideals.   maximal ideal  ideal (maximal)   Let be commutative with identity and let be a nonzero ideal. We say that is a maximal ideal if no proper ideal of properly contains . That is, if is an ideal satisfying , either or .    In other words, an ideal is maximal if no larger ideal (with respect to inclusion) properly contains it. As we will see later, rings can have many maximal ideals.  It is a fact that any ring with has a maximal ideal. This follows from Zorn's Lemma ; a rigorous exploration of Zorn's Lemma lies outside of the scope of this text, but suffice it to say that Zorn's Lemma is incredibly useful in all areas of algebra for proving existence theorems. For example, a proof that every vector space has a basis relies on Zorn's Lemma.  Rings with only one maximal ideal are said to be local rings , and are actively studied in modern research in commutative algebra (the study of commutative rings and their properties).  The next two results demonstrate that the maximality of is precisely the condition that guarantees that is a field.    Let be commutative with identity and a maximal ideal of . Let , and set . Then: is an ideal of ; ; and thus there exist , such that .   TBD     Let be commutative with identity and an ideal of . Then is maximal if and only if is a field.    For the forward direction, apply the previous lemma to construct an inverse for given any .    If is a field, assume is an ideal of that properly contains . Let ; then is a nonzero element of , and since is a field, there is some such that . Since , . As , we have , and thus , which means . Thus, is maximal.  Now, suppose that is maximal and let . Apply the previous lemma to obtain , where . Then       Every maximal ideal is prime.    All fields are integral domains. Thus, if is maximal, is a field, thus a domain, and thus is prime.    In general, the converse is not true (see the Challenge below). However, it holds in sufficiently nice rings.    In a principal ideal domain, every prime ideal is maximal.    Let be a PID and a prime ideal. By previous work, is prime. Suppose that . Thus, , so . That is, . Since is prime and is a domain, it is irreducible. Thus, either or is a unit. If is a unit, then . If is a unit, then , and thus , which means that .  Thus, is maximal.      Describe the prime and maximal ideals of and .   For which ideals is a domain? A field? Similarly for . Or, use .  TBD    Challenge   Find a commutative ring with identity, , and a nonmaximal prime ideal of .    In , it is straightforward to see that is prime ( ). Moreover, , and thus is not maximal.      Homomorphisms and Quotient Rings  As quotient rings provide fertile soil for building new examples of rings, it should not surprise us to find that homomorphisms interact with quotient rings in interesting and useful ways. Chief among them are the isomorphism theorems . In this subsection, we focus primarily on the First Isomorphism Theorem.  We have seen that any homomorphism gives rise to an ideal of , namely . Our next theorem demonstrates that, given a commutative ring with identity , every ideal is the kernel of some homomorphism defined on .    Let be commutative with identity and an ideal of . Define by . Then is a homomorphism with .    In what follows, we work toward a proof of the First Isomorphism Theorem for Rings.  Throughout, let and be commutative rings with identity, and let be a homomorphism. Recall that .  Define by .    Using the notation from above, is a well-defined function.     Suppose that . Then , so , and thus . Therefore, , and is well-defined.     Using the notation above, is a homomorphism.     We show that preserves addition. That it preserves multiplication will follow similarly. Observe that .     Using the notation above, is one-to-one.     Suppose that . That is, . Then , so , and therefore . Thus, is one-to-one.     Using the notation above, is onto.     Since is onto by definition, given any there is some such that . Then .   We thus obtain the following, due to Emmy Noether:   First Isomorphism Theorem  Noether's Isomorphism Theorem  E. Noether   Let be a homomorphism of commutative rings. Then .  In particular, if is onto, .    The First Isomorphism Theorem gives a useful way of establishing an isomorphism between a quotient ring and another ring : find an onto homomorphism with kernel .    We have the following isomorphisms of rings.                     TBD Define by . We saw earlier that this evaluation map is a homomorphism. It is easy to see that is onto as for any . Thus, by the First Isomorphism Theorem.  We claim that . Clearly, . Moreover, . Finally, is prime and thus maximal, as is a PID. Thus, .     Let and define by . That is, sends an equivalence class represented by to the equivalence class represented by in .   Show that is a well-defined function.  Prove that is a homomorphism.  Is onto? Justify.  Compute (that is, list the elements in the set). Is one-to-one?  Without appealing to the definition, is prime? Maximal? Explain.    TBD    "
},
{
  "id": "definition-38",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#definition-38",
  "type": "Definition",
  "number": "4.3.1",
  "title": "",
  "body": " congruence mod   Let be a ring, an ideal of , and . We say is congruent to modulo if . If this is the case, we write .   "
},
{
  "id": "activity-20",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#activity-20",
  "type": "Activity",
  "number": "4.3.2",
  "title": "",
  "body": "  Determine (with brief justification) whether in the following rings .   , , ,  , , ,  , , ,  , , ,  ( Challenge. ) , , ,    TBD last one: .  "
},
{
  "id": "exploration-25",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#exploration-25",
  "type": "Exploration",
  "number": "4.3.3",
  "title": "",
  "body": "  Given a ring , ideal , and , when is it the case that ?    When .   "
},
{
  "id": "theorem-71",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#theorem-71",
  "type": "Theorem",
  "number": "4.3.4",
  "title": "",
  "body": "  Let be a ring and an ideal of . Then congruence modulo is an equivalence relation on .    Since , for all , so and the relation is reflexive.  Moreover, if , then , so the relation is symmetric.  If and , then , so the relation is transitive.   "
},
{
  "id": "thm-addition-mod-I",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#thm-addition-mod-I",
  "type": "Theorem",
  "number": "4.3.5",
  "title": "",
  "body": "  Let be a ring and an ideal of . If such that and , then .    Suppose and . Then and . Adding, we have . Thus, .   "
},
{
  "id": "thm-multiplication-mod-I",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#thm-multiplication-mod-I",
  "type": "Theorem",
  "number": "4.3.6",
  "title": "",
  "body": "  Let be a ring and an ideal of . If such that and , then .    As before, we observe that and . Write and . Then , so , and thus .   "
},
{
  "id": "theorem-74",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#theorem-74",
  "type": "Theorem",
  "number": "4.3.7",
  "title": "",
  "body": " quotient ring   Let be a commutative ring with identity , an ideal of , and . The set of equivalence classes modulo , denoted , is a commutative ring (called the quotient ring of by ) with identity under the following operations:     These operations were shown to be well-defined in and .  "
},
{
  "id": "activity-21",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#activity-21",
  "type": "Activity",
  "number": "4.3.8",
  "title": "",
  "body": "  Answer the questions below. Be prepared to give an information justification of your thinking.   Suppose and . Calculate and .  Let and . List all elements of (there should be 9 in total).  Set and . Find an element such that .    "
},
{
  "id": "exploration-26",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#exploration-26",
  "type": "Exploration",
  "number": "4.3.9",
  "title": "",
  "body": "  Consider the ring and the ideals and .   List the elements of and .  What happens to in when you pass to the quotient ring ? How about as you pass from to ?  In view of your answer to the previous question, how does behave as you mod out by and ?  Build addition and multiplication tables for each of and .    TBD  "
},
{
  "id": "exploration-27",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#exploration-27",
  "type": "Exploration",
  "number": "4.3.10",
  "title": "",
  "body": " graph (of a function)  zero set   One of the most useful connections made in high school algebra is the connection between a function (in particular, a polynomial function) and its graph . We may extend this notion to ideals via the concept of a zero set as follows.  Let be a field and with a nonzero ideal. We define the zero set of , denoted , as the set of all points for which for all .   Suppose . Prove that if and only if for each . Thus, can be determined entirely by examining the generators of .  Describe given .  (Challenge) Given and , describe and .  Given , describe the relationship between the variables and in the quotient . In what way have we restricted our polynomial inputs to the parabola ?    TBD.  "
},
{
  "id": "definition-39",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#definition-39",
  "type": "Definition",
  "number": "4.3.11",
  "title": "",
  "body": " prime ideal  ideal (prime)   Let be commutative with identity and a nonzero ideal. We say is prime if whenever such that , we have or .   "
},
{
  "id": "theorem-75",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#theorem-75",
  "type": "Theorem",
  "number": "4.3.12",
  "title": "",
  "body": "  Let be a domain and be prime. Then is a prime ideal.   TBD  "
},
{
  "id": "activity-22",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#activity-22",
  "type": "Activity",
  "number": "4.3.13",
  "title": "",
  "body": "  Which of the following ideals are prime?    in      in      in      in      in           Not prime. , but .    Prime. If , then and 11 is prime.    Prime. Easy explanation is that is isomorphic to . For now, though, we know that is irreducible, and is a PID, so irreducibles are prime.    Not prime. , but for degree reasons.    One may use the EA to show that , so . This is prime.      "
},
{
  "id": "theorem-76",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#theorem-76",
  "type": "Theorem",
  "number": "4.3.14",
  "title": "",
  "body": "  Let be commutative with identity and an ideal of . Then is prime if and only if is an integral domain.   "
},
{
  "id": "proof-84",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#proof-84",
  "type": "Proof",
  "number": "4.3.2.1",
  "title": "",
  "body": " Begin by assuming that is prime, and suppose . Then , and since is prime, either or . Thus either or .  Now assume that is a domain. Further, let be such that . Then , and since is a domain, or , i.e., or . Thus, is prime.  "
},
{
  "id": "definition-40",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#definition-40",
  "type": "Definition",
  "number": "4.3.15",
  "title": "",
  "body": " maximal ideal  ideal (maximal)   Let be commutative with identity and let be a nonzero ideal. We say that is a maximal ideal if no proper ideal of properly contains . That is, if is an ideal satisfying , either or .   "
},
{
  "id": "lemma-9",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#lemma-9",
  "type": "Lemma",
  "number": "4.3.16",
  "title": "",
  "body": "  Let be commutative with identity and a maximal ideal of . Let , and set . Then: is an ideal of ; ; and thus there exist , such that .   TBD  "
},
{
  "id": "theorem-77",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#theorem-77",
  "type": "Theorem",
  "number": "4.3.17",
  "title": "",
  "body": "  Let be commutative with identity and an ideal of . Then is maximal if and only if is a field.    For the forward direction, apply the previous lemma to construct an inverse for given any .    If is a field, assume is an ideal of that properly contains . Let ; then is a nonzero element of , and since is a field, there is some such that . Since , . As , we have , and thus , which means . Thus, is maximal.  Now, suppose that is maximal and let . Apply the previous lemma to obtain , where . Then    "
},
{
  "id": "theorem-78",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#theorem-78",
  "type": "Theorem",
  "number": "4.3.18",
  "title": "",
  "body": "  Every maximal ideal is prime.    All fields are integral domains. Thus, if is maximal, is a field, thus a domain, and thus is prime.   "
},
{
  "id": "thm-pid-primes-are-maximal",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#thm-pid-primes-are-maximal",
  "type": "Theorem",
  "number": "4.3.19",
  "title": "",
  "body": "  In a principal ideal domain, every prime ideal is maximal.    Let be a PID and a prime ideal. By previous work, is prime. Suppose that . Thus, , so . That is, . Since is prime and is a domain, it is irreducible. Thus, either or is a unit. If is a unit, then . If is a unit, then , and thus , which means that .  Thus, is maximal.   "
},
{
  "id": "exploration-28",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#exploration-28",
  "type": "Exploration",
  "number": "4.3.20",
  "title": "",
  "body": "  Describe the prime and maximal ideals of and .   For which ideals is a domain? A field? Similarly for . Or, use .  TBD  "
},
{
  "id": "theorem-80",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#theorem-80",
  "type": "Theorem",
  "number": "4.3.21",
  "title": "",
  "body": "  Let be commutative with identity and an ideal of . Define by . Then is a homomorphism with .   "
},
{
  "id": "lemma-10",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#lemma-10",
  "type": "Lemma",
  "number": "4.3.22",
  "title": "",
  "body": "  Using the notation from above, is a well-defined function.   "
},
{
  "id": "proof-89",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#proof-89",
  "type": "Proof",
  "number": "4.3.3.1",
  "title": "",
  "body": " Suppose that . Then , so , and thus . Therefore, , and is well-defined.  "
},
{
  "id": "lemma-11",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#lemma-11",
  "type": "Lemma",
  "number": "4.3.23",
  "title": "",
  "body": "  Using the notation above, is a homomorphism.   "
},
{
  "id": "proof-90",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#proof-90",
  "type": "Proof",
  "number": "4.3.3.2",
  "title": "",
  "body": " We show that preserves addition. That it preserves multiplication will follow similarly. Observe that .  "
},
{
  "id": "lemma-12",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#lemma-12",
  "type": "Lemma",
  "number": "4.3.24",
  "title": "",
  "body": "  Using the notation above, is one-to-one.   "
},
{
  "id": "proof-91",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#proof-91",
  "type": "Proof",
  "number": "4.3.3.3",
  "title": "",
  "body": " Suppose that . That is, . Then , so , and therefore . Thus, is one-to-one.  "
},
{
  "id": "lemma-13",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#lemma-13",
  "type": "Lemma",
  "number": "4.3.25",
  "title": "",
  "body": "  Using the notation above, is onto.   "
},
{
  "id": "proof-92",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#proof-92",
  "type": "Proof",
  "number": "4.3.3.4",
  "title": "",
  "body": " Since is onto by definition, given any there is some such that . Then .  "
},
{
  "id": "theorem-81",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#theorem-81",
  "type": "Theorem",
  "number": "4.3.26",
  "title": "Noether's Isomorphism Theorem.",
  "body": " First Isomorphism Theorem  Noether's Isomorphism Theorem  E. Noether   Let be a homomorphism of commutative rings. Then .  In particular, if is onto, .   "
},
{
  "id": "theorem-82",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#theorem-82",
  "type": "Theorem",
  "number": "4.3.27",
  "title": "",
  "body": "  We have the following isomorphisms of rings.                    "
},
{
  "id": "proof-93",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#proof-93",
  "type": "Proof",
  "number": "4.3.3.5",
  "title": "",
  "body": "TBD Define by . We saw earlier that this evaluation map is a homomorphism. It is easy to see that is onto as for any . Thus, by the First Isomorphism Theorem.  We claim that . Clearly, . Moreover, . Finally, is prime and thus maximal, as is a PID. Thus, .  "
},
{
  "id": "activity-23",
  "level": "2",
  "url": "SubSec-Quotient-Rings.html#activity-23",
  "type": "Activity",
  "number": "4.3.28",
  "title": "",
  "body": "  Let and define by . That is, sends an equivalence class represented by to the equivalence class represented by in .   Show that is a well-defined function.  Prove that is a homomorphism.  Is onto? Justify.  Compute (that is, list the elements in the set). Is one-to-one?  Without appealing to the definition, is prime? Maximal? Explain.    TBD  "
},
{
  "id": "index-1",
  "level": "1",
  "url": "index-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
