var App = new Vue({
  el: '#app',
  data: {
    questions: [
      {
        id: 1,
        type: 'Lawyer',
        category: 'Lorem Ipsum',
        q: 'What is LexMeet?',
        a: 'It is a website created by LexMeet, Inc. for online clients looking for a lawyer to seek legal advice and solve their legal problem without leaving the comforts of their home. LexMeet provides client an online facility to select lawyers from the list suggested to him/her by the website as to expertise, location and language relevant to his/her legal problem and allow them to meet and discuss it via videoconference. It is a form of e-lawyering.'
      },
      {
        id: 2,
        type: 'Lawyer',
        category: 'Lorem Ipsum',
        q: 'What is e-lawyering?',
        a: '&quot;Elawyering&quot; means a secure, professional method of delivering legal services online that is accessible to the client and the attorney anywhere they may access the Internet. The use of an online client portal allows for the initiation of the attorney/client relationship through to completion and payment for legal services (Stephanie Kimbro, Esq., MA, JD).'
      },
      {
        id: 3,
        type: 'Lawyer',
        category: 'Lorem Ipsum',
        q: 'How can I start getting legal advice using LexMeet?',
        a: 'You must first register as a client and verify the email that you provided to LexMeet.'
      },
      {
        id: 4,
        type: 'Lawyer',
        category: 'Lorem Ipsum',
        q: 'How can I register in LexMeet?',
        a: 'Clients can register in LexMeet by clicking the orange button "Im A Client" located in the LexMeets Home Page. Complete the information required by LexMeet, provide a valid email and your password and agree to the Terms and Conditions of Use of LexMeet. Take note: You must fully scroll down the Terms and Conditions of Use to make the I Agree button clickable. After clicking the said button, LexMeet shall send an email verification to the client.'
      },
      {
        id: 5,
        type: 'Lawyer',
        category: 'Lorem Ipsum',
        q: 'How can I verify my registered account with LexMeet?',
        a: 'Check your email inbox where LexMeet sent you an email verification message. Click the button provided for in the said message to verify your email. After verification of account, you can now proceed with the online legal consultation.'
      },
      {
        id: 6,
        type: 'Lawyer',
        category: 'Lorem Ipsum',
        q: 'How can I start online legal consultation in LexMeet?',
        a: 'Complete first your User Profile in Account Information, then, you can start obtaining legal advice from a lawyer using LexMeet by submitting a Legal Problem using the Submit Legal Problem button (orange). Just follow the step-by-step procedure provided in said page.'
      },
      {
        id: 7,
        type: 'Lawyer',
        category: 'Lorem Ipsum',
        q: 'What is the step-by-step procedure in submitting a Legal Problem?',
        a: 'Step 1 - Click the "SUBMIT LEGAL PROBLEM" orange button in the upper right corner of your Dashboard (Pindutin ang "Submit Legal problem" na nasa iyong pahina ng website); <br /> Step 2 - Select the type of legal problem in "WHAT KIND OF LEGAL PROBLEM?" (Pumili ng isang problemang legal sa "What Kind of Legal Problem?"); <br /> Step 3 - Type or provide the complete name or identity of your ADVERSE PARTY (Ilagay ang pangalan ng iyong kalaban o magiging kalaban sa legal problem). <br /> Step 4 - Type or Cut and Paste the facts of your legal problem in SUMMARY OF FACTS (Ilagay po ang buong kuwento ng mga pangyayari ng iyong problemang legal). <br /> Step 5 - Type or Cut and Paste the LIST OF OBJECTIVES and click NEXT (Ilagay po ang lahat ng inyong gustong mangyari o kagustuhan na solusyon sa legal problem); <br /> Step 6 - Type or Cut and Paste the LIST OF QUESTIONS, and click NEXT (Ilagay po ang lahat ng inyong katanungan na may relasyon sa legal problem); <br /> Step 7 - Attach documents, pictures or videos, if any (Ilagay po kung meron po kayong dokumento o larawan o video ay isama niyo dito); <br /> Step 8 – Put the DATE and TIME of your requested online legal consultation and your LOCATION (Itakda ang araw at oras ng pag-uusap sa abogado sa iba pang katanungan sa pamamagitan ng video conference sa webcam); <br /> Step 9 – Review all informations you provided and if already satisfied, submit the SUMMARY OF LEGAL PROBLEM to LexMeet to proceed in the next step of selecting lawyer in the Lawyers List.'
      }
    ],
    searchInput: '',
    liveSearch: []
  },
  methods: {
    searchFocus()
    {
      $('.search-container').find('a').removeClass('hide')
    },
    searchFocusOut()
    {
      $('.search-container').find('a').removeClass('hide')
    },
    arrowDown(event)
    {
      $(event.currentTarget).next('a').focus()
      $(event.currentTarget).next('input').focus()
    },
    arrowUp(event)
    {
      $(event.currentTarget).prev('a').focus()
      $(event.currentTarget).prev('input').focus()
    },
    searchQuestion()
    {
      var str   = this.searchInput.toLowerCase()
      var s = str.split(" ").join('|')
      var a = new RegExp( s, 'g' )
      if (s) {
        $('.no-result').removeClass('hide')
        this.liveSearch = []
        for (var i = 0; i < this.questions.length; i++) {
          if (this.questions[i].q.toLowerCase().match(a)) {
            this.liveSearch.push(this.questions[i])
          }
        }
      } 
      else {
        $('.no-result').addClass('hide')
        this.liveSearch = []
      }
    },
    boldTxt(q, s, id)
    {
      var c = q.replace(s, '<strong>'+s+'</strong>')
      setTimeout(function(){
        $('[search-id='+id+']').html(c)
      }, 0)
    },
    showResult(data)
    {
      $('.search-container').find('a').addClass('hide')
      $('.question').html(data.q)
      $('.answer').html(data.a)
      $('.type').html(data.type)
      $('.category').html(data.category)
      this.searchInput = data.q
      $('[aria-controls=search]').click()
    },
    showQuestion(data)
    {
      $('.question').html(data.q)
      $('.answer').html(data.a)
      $('.type').html(data.type)
      $('.category').html(data.category)
      $('[aria-controls=view]').click()
    }
  }
});