function nextStep(){

  const title=document.getElementById("stepTitle");
  const text=document.getElementById("stepText");

  if(!title) return;

  const steps=[
    {
      title:"Step 1: Review Invoices",
      text:"Confirm all invoices before continuing."
    },
    {
      title:"Step 2: Calculate VAT",
      text:"AI has calculated your VAT automatically."
    },
    {
      title:"Step 3: Open VAT Declaration",
      text:"Open VAT Declaration inside e-Tax."
    },
    {
      title:"Step 4: Ready to Submit",
      text:"Your declaration is ready for submission."
    }
  ];

  let current=parseInt(title.dataset.step||"0");
  current=(current+1)%steps.length;

  title.dataset.step=current;
  title.innerHTML=steps[current].title;
  text.innerHTML=steps[current].text;

}
