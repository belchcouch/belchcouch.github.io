// File: terms.js
// Contains the list of medical terms for the game

const medicalTerms = [
   {
    "term": "Abdominocentesis",
    "definition": "Puncture to remove fluid from the abdomen",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Abdomin/o", "meaning": "abdomen" },
    "suffix": { "part": "-centesis", "meaning": "surgical puncture to remove fluid" }
  },
  {
    "term": "Abdominoplasty",
    "definition": "Surgical repair of the abdomen",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Abdomin/o", "meaning": "abdomen" },
    "suffix": { "part": "-plasty", "meaning": "surgical repair" }
  },
  {
    "term": "Abduction",
    "definition": "Movement away from the midline of the body",
    "prefix": { "part": "Ab-", "meaning": "away from" },
    "root": { "part": "duct/o", "meaning": "to lead, carry" },
    "suffix": { "part": "-ion", "meaning": "process" }
  },
  {
    "term": "Abnormal",
    "definition": "Pertaining to away from the rule or order",
    "prefix": { "part": "Ab-", "meaning": "away from" },
    "root": { "part": "norm/o", "meaning": "rule, order" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Achondroplasia",
    "definition": "Inherited disorder in which the bones of the arms and legs fail to grow to normal size",
    "prefix": { "part": "A-", "meaning": "no, not, without" },
    "root": { "part": "Chondr/o", "meaning": "cartilage" },
    "suffix": { "part": "-plasia", "meaning": "development, formation, growth" }
  },
  {
    "term": "Acoustic",
    "definition": "Pertaining to hearing",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Acous/o", "meaning": "hearing" }, // Or Acoust/o
    "suffix": { "part": "-tic", "meaning": "pertaining to" }
  },
  {
    "term": "Acrophobia",
    "definition": "Fear of heights",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Acr/o", "meaning": "extremities, top, extreme point" },
    "suffix": { "part": "-phobia", "meaning": "fear" }
  },
   {
    "term": "Adenitis",
    "definition": "Inflammation of a gland",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Aden/o", "meaning": "gland" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
   {
    "term": "Adenocarcinoma",
    "definition": "Cancerous tumor of glandular tissue",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Aden/o", "meaning": "gland" }, // Also Carcin/o for cancer
    "suffix": { "part": "-oma", "meaning": "tumor, mass" }
  },
  {
    "term": "Adenoidectomy",
    "definition": "Removal of the adenoids",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Adenoid/o", "meaning": "adenoids" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Adenoma",
    "definition": "Tumor of a gland; benign tumor",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Aden/o", "meaning": "gland" },
    "suffix": { "part": "-oma", "meaning": "tumor, mass" }
  },
  {
    "term": "Adenopathy",
    "definition": "Disease condition of a 'gland' (refers to lymph nodes)",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Aden/o", "meaning": "gland" },
    "suffix": { "part": "-pathy", "meaning": "disease condition" }
  },
  {
    "term": "Adipocyte",
    "definition": "Fat cell",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Adip/o", "meaning": "fat" },
    "suffix": { "part": "-cyte", "meaning": "cell" }
  },
  {
    "term": "Adipose",
    "definition": "Pertaining to fat",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Adip/o", "meaning": "fat" },
    "suffix": { "part": "-ose", "meaning": "pertaining to, full of" }
  },
  {
    "term": "Adrenalectomy",
    "definition": "Removal of an adrenal gland",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Adrenal/o", "meaning": "adrenal gland" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
   {
    "term": "Agoraphobia",
    "definition": "Fear of open spaces",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Agora", "meaning": "marketplace (open spaces)" }, // Non-standard root
    "suffix": { "part": "-phobia", "meaning": "fear" }
  },
   {
    "term": "Albuminuria",
    "definition": "Protein (albumin) in the urine",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Albumin/o", "meaning": "albumin (protein)" },
    "suffix": { "part": "-uria", "meaning": "urination, urine condition" }
  },
  {
    "term": "Analgesia",
    "definition": "Absence of sensitivity to pain",
    "prefix": { "part": "An-", "meaning": "no, not, without" },
    "root": { "part": "alges/o", "meaning": "sensitivity to pain" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
  {
    "term": "Anemia",
    "definition": "Condition marked by reduction in the number of erythrocytes or in the amount of hemoglobin in blood",
    "prefix": { "part": "An-", "meaning": "no, not, without" },
    "root": { "part": null, "meaning": null }, // Root (hem/o) is implied
    "suffix": { "part": "-emia", "meaning": "blood condition" }
  },
   {
    "term": "Anencephaly",
    "definition": "Congenital condition of partial or complete absence of brain matter",
    "prefix": { "part": "An-", "meaning": "no, not, without" },
    "root": { "part": "Encephal/o", "meaning": "brain" },
    "suffix": { "part": "-y", "meaning": "condition, process" }
  },
  {
    "term": "Anesthesia",
    "definition": "Absence of nervous feeling or sensation",
    "prefix": { "part": "An-", "meaning": "no, not, without" },
    "root": { "part": "esthesi/o", "meaning": "feeling, nervous sensation" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
  {
    "term": "Angiogenesis",
    "definition": "Formation of blood vessels",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Angi/o", "meaning": "vessel" },
    "suffix": { "part": "-genesis", "meaning": "producing, forming" }
  },
  {
    "term": "Angiogram",
    "definition": "X-ray record of blood vessels",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Angi/o", "meaning": "vessel" },
    "suffix": { "part": "-gram", "meaning": "record" }
  },
  {
    "term": "Angiography",
    "definition": "X-ray imaging of blood vessels after injection of contrast material",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Angi/o", "meaning": "vessel" },
    "suffix": { "part": "-graphy", "meaning": "process of recording" }
  },
  {
    "term": "Angioplasty",
    "definition": "Surgical repair of a blood vessel",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Angi/o", "meaning": "vessel" },
    "suffix": { "part": "-plasty", "meaning": "surgical repair" }
  },
  {
    "term": "Anhidrosis",
    "definition": "Absence of sweating",
    "prefix": { "part": "An-", "meaning": "no, not, without" },
    "root": { "part": "hidr/o", "meaning": "sweat" },
    "suffix": { "part": "-osis", "meaning": "condition, usually abnormal" }
  },
   {
    "term": "Anisocoria",
    "definition": "Inequality in the size of pupils",
    "prefix": { "part": "Aniso-", "meaning": "unequal" },
    "root": { "part": "cor/o", "meaning": "pupil" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
   {
    "term": "Ankylosis",
    "definition": "Immobility (fusion) of a joint due to disease, injury, or surgical procedure",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ankyl/o", "meaning": "stiff" },
    "suffix": { "part": "-osis", "meaning": "condition, usually abnormal" }
  },
  {
    "term": "Anorexia",
    "definition": "Lack of appetite",
    "prefix": { "part": "An-", "meaning": "no, not, without" },
    "root": { "part": "orex/o", "meaning": "appetite" }, // Less common root
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
  {
    "term": "Anosmia",
    "definition": "Loss of the sense of smell",
    "prefix": { "part": "An-", "meaning": "no, not, without" },
    "root": { "part": "osm/o", "meaning": "smell" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
   {
    "term": "Anoxia",
    "definition": "Without oxygen",
    "prefix": { "part": "An-", "meaning": "no, not, without" },
    "root": { "part": "ox/o", "meaning": "oxygen" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
   {
    "term": "Antibiotic",
    "definition": "Chemical substance that has the ability to inhibit or destroy foreign organisms in the body",
    "prefix": { "part": "Anti-", "meaning": "against" },
    "root": { "part": "Bi/o", "meaning": "life" },
    "suffix": { "part": "-tic", "meaning": "pertaining to" }
  },
  {
    "term": "Anticoagulant",
    "definition": "Substance that prevents blood clotting",
    "prefix": { "part": "Anti-", "meaning": "against" },
    "root": { "part": "coagul/o", "meaning": "clotting" },
    "suffix": { "part": "-ant", "meaning": "substance that promotes" } // Suffix meaning is nuanced here
  },
  {
    "term": "Anuria",
    "definition": "Suppression of urine formation",
    "prefix": { "part": "An-", "meaning": "no, not, without" },
    "root": { "part": "ur/o", "meaning": "urine" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
  {
    "term": "Aphasia",
    "definition": "Inability to speak",
    "prefix": { "part": "A-", "meaning": "no, not, without" },
    "root": { "part": "phas/o", "meaning": "speech" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
  {
    "term": "Apnea",
    "definition": "Without breathing",
    "prefix": { "part": "A-", "meaning": "no, not, without" },
    "root": { "part": "pne/o", "meaning": "breathing" },
    "suffix": { "part": "-a", "meaning": "condition/state" }
  },
  {
    "term": "Appendectomy",
    "definition": "Removal or excision of the appendix",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Append/o", "meaning": "appendix" }, // or Appendic/o
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Appendicitis",
    "definition": "Inflammation of the appendix",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Appendic/o", "meaning": "appendix" }, // or Append/o
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Arrhythmia",
    "definition": "Irregular or abnormal heartbeat; literally without rhythm",
    "prefix": { "part": "A-", "meaning": "no, not, without" },
    "root": { "part": "rrhythm/o", "meaning": "rhythm" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
   {
    "term": "Arteriole",
    "definition": "Small artery",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Arteri/o", "meaning": "artery" },
    "suffix": { "part": "-ole", "meaning": "little, small" }
  },
  {
    "term": "Arteriosclerosis",
    "definition": "Hardening of an artery",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Arteri/o", "meaning": "artery" }, // Also Scler/o for hardening
    "suffix": { "part": "-sclerosis", "meaning": "hardening" }
  },
   {
    "term": "Arthralgia",
    "definition": "Joint pain",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Arthr/o", "meaning": "joint" },
    "suffix": { "part": "-algia", "meaning": "pain" }
  },
  {
    "term": "Arthritis",
    "definition": "Inflammation of a joint",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Arthr/o", "meaning": "joint" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Arthrocentesis",
    "definition": "Surgical puncture to remove fluid from the joint space",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Arthr/o", "meaning": "joint" },
    "suffix": { "part": "-centesis", "meaning": "surgical puncture to remove fluid" }
  },
   {
    "term": "Arthrography",
    "definition": "X-ray imaging of a joint after injection of contrast material",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Arthr/o", "meaning": "joint" },
    "suffix": { "part": "-graphy", "meaning": "process of recording" }
  },
  {
    "term": "Arthroplasty",
    "definition": "Surgical repair of a joint",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Arthr/o", "meaning": "joint" },
    "suffix": { "part": "-plasty", "meaning": "surgical repair" }
  },
  {
    "term": "Arthroscopy",
    "definition": "Visual examination of the inside of joint with an endoscope",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Arthr/o", "meaning": "joint" },
    "suffix": { "part": "-scopy", "meaning": "process of visual examination" }
  },
  {
    "term": "Aspermia",
    "definition": "Failure to produce semen",
    "prefix": { "part": "A-", "meaning": "no, not, without" },
    "root": { "part": "sperm/o", "meaning": "spermatozoa, semen" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
  {
    "term": "Asphyxia",
    "definition": "Deficient oxygen and increased carbon dioxide in the bloodstream",
    "prefix": { "part": "A-", "meaning": "no, not, without" },
    "root": { "part": "sphyx/o", "meaning": "pulse" }, // Root connection to definition is indirect
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
  {
    "term": "Aspiration", // From 'Fine needle aspiration'
    "definition": "Withdrawal of fluid or tissue by suction",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Aspirat/o", "meaning": "to draw in or out" }, // Non-standard root
    "suffix": { "part": "-ion", "meaning": "process" }
  },
  {
    "term": "Astrocytoma",
    "definition": "Malignant brain tumor composed of astrocytes (glial cells)",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Astr/o", "meaning": "star-like" }, // Also Cyt/o for cell
    "suffix": { "part": "-oma", "meaning": "tumor, mass" }
  },
   {
    "term": "Ataxia",
    "definition": "Without coordination",
    "prefix": { "part": "A-", "meaning": "no, not, without" },
    "root": { "part": "tax/o", "meaning": "coordination, order" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
  {
    "term": "Atelectasis",
    "definition": "Collapsed lung",
    "prefix": { "part": "Atel/o", "meaning": "incomplete" }, // Prefix/root combo
    "root": { "part": null, "meaning": null },
    "suffix": { "part": "-ectasis", "meaning": "dilation, widening, expansion" } // Meaning seems counterintuitive here
  },
   {
    "term": "Atherectomy",
    "definition": "Removal of plaque (lipids and clots) that accumulate in the lining of an artery",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ather/o", "meaning": "plaque, fatty substance" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Atheroma",
    "definition": "Mass of fatty plaque that collects in an artery",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ather/o", "meaning": "plaque, fatty substance" },
    "suffix": { "part": "-oma", "meaning": "tumor, mass" }
  },
  {
    "term": "Atherosclerosis",
    "definition": "Fatty plaque deposits in the interior lining of an artery",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ather/o", "meaning": "plaque, fatty substance" }, // Also Scler/o for hardening
    "suffix": { "part": "-sclerosis", "meaning": "hardening" }
  },
   {
    "term": "Atrophy",
    "definition": "Decrease in size of normally developed organ or tissue of the body; wasting away",
    "prefix": { "part": "A-", "meaning": "no, not, without" },
    "root": { "part": null, "meaning": null }, // Root (troph/o) implied
    "suffix": { "part": "-trophy", "meaning": "development, nourishment" }
  },
  {
    "term": "Audiogram",
    "definition": "Record of hearing using an audiometer",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Audi/o", "meaning": "hearing" },
    "suffix": { "part": "-gram", "meaning": "record" }
  },
  {
    "term": "Audiometry",
    "definition": "Testing the sense of hearing",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Audi/o", "meaning": "hearing" },
    "suffix": { "part": "-metry", "meaning": "process of measuring" }
  },
  {
    "term": "Aural",
    "definition": "Pertaining to the ear",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Aur/o", "meaning": "ear" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Axillary",
    "definition": "Pertaining to the under arm or armpit",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Axill/o", "meaning": "armpit" },
    "suffix": { "part": "-ary", "meaning": "pertaining to" }
  },
  {
    "term": "Azoospermia",
    "definition": "Lack of sperm in the semen",
    "prefix": { "part": "A-", "meaning": "no, not, without" },
    "root": { "part": "zo/o", "meaning": "animal life (sperm)" }, // Also sperm/o
    "suffix": { "part": "-spermia", "meaning": "condition of sperm" }
  },
  {
    "term": "Azotemia",
    "definition": "Excess nitrogenous waste products in the blood; uremia",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Azot/o", "meaning": "nitrogen" },
    "suffix": { "part": "-emia", "meaning": "blood condition" }
  },

  // === B Terms ===
  {
    "term": "Bacteriuria",
    "definition": "Bacteria in the urine",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Bacteri/o", "meaning": "bacteria" },
    "suffix": { "part": "-uria", "meaning": "urination, urine condition" }
  },
  {
    "term": "Balanitis",
    "definition": "Inflammation of the glans penis",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Balan/o", "meaning": "glans penis" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Basophil",
    "definition": "White blood cell containing granules that stain blue",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Bas/o", "meaning": "base (alkaline)" },
    "suffix": { "part": "-phil", "meaning": "attraction for" }
  },
  {
    "term": "Bilateral",
    "definition": "Pertaining to two or both sides",
    "prefix": { "part": "Bi-", "meaning": "two" },
    "root": { "part": "later/o", "meaning": "side" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Biology",
    "definition": "Study of life (living organisms)",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Bi/o", "meaning": "life" },
    "suffix": { "part": "-logy", "meaning": "study of" }
  },
  {
    "term": "Biopsy",
    "definition": "Process of removing a small piece of living tissue for microscopic examination",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Bi/o", "meaning": "life" },
    "suffix": { "part": "-opsy", "meaning": "process of viewing" }
  },
  {
    "term": "Blepharitis",
    "definition": "Inflammation of an eyelid",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Blephar/o", "meaning": "eyelid" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Blepharoptosis",
    "definition": "Sagging or drooping eyelid; ptosis",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Blephar/o", "meaning": "eyelid" },
    "suffix": { "part": "-ptosis", "meaning": "drooping, falling, prolapse" }
  },
  {
    "term": "Brachytherapy",
    "definition": "Placement of radioactive material in contact with or implanted into tumor tissue",
    "prefix": { "part": "Brachy-", "meaning": "short (distance)" },
    "root": { "part": null, "meaning": null },
    "suffix": { "part": "-therapy", "meaning": "treatment" }
  },
  {
    "term": "Bradycardia",
    "definition": "Slow heartbeat",
    "prefix": { "part": "Brady-", "meaning": "slow" },
    "root": { "part": "Cardi/o", "meaning": "heart" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
   {
    "term": "Bradykinesia",
    "definition": "Slow movement",
    "prefix": { "part": "Brady-", "meaning": "slow" },
    "root": { "part": "kinesi/o", "meaning": "movement" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
  {
    "term": "Bronchiectasis",
    "definition": "Abnormal condition of the lung in which bronchi become damaged and widened (dilated)",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Bronchi/o", "meaning": "bronchial tube" },
    "suffix": { "part": "-ectasis", "meaning": "dilation, widening" }
  },
   {
    "term": "Bronchiole",
    "definition": "Small bronchial tubes",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Bronchi/o", "meaning": "bronchial tube" },
    "suffix": { "part": "-ole", "meaning": "little, small" }
  },
  {
    "term": "Bronchiolitis",
    "definition": "Inflammation of a bronchiole",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Bronchiol/o", "meaning": "bronchiole (small bronchus)" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Bronchitis",
    "definition": "Inflammation of bronchial tubes",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Bronch/o", "meaning": "bronchial tube" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Bronchodilator",
    "definition": "Agent that dilates (widens) blood vessels and relieves bronchospasm",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Bronch/o", "meaning": "bronchial tube" }, // Also dilat/o for widening
    "suffix": { "part": "-dilator", "meaning": "one who widens" }
  },
  {
    "term": "Bronchopleural",
    "definition": "Pertaining to the bronchus and the pleura",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Bronch/o", "meaning": "bronchial tube" }, // Also Pleur/o for pleura
    "suffix": { "part": "-pleural", "meaning": "pertaining to the pleura" } // Complex suffix
  },
  {
    "term": "Bronchoscopy",
    "definition": "Visual examination of the bronchial tubes using an endoscope",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Bronch/o", "meaning": "bronchial tube" },
    "suffix": { "part": "-scopy", "meaning": "process of visual examination" }
  },
  {
    "term": "Bronchospasm",
    "definition": "Involuntary muscular contractions in bronchial tubes leading to narrowing of the bronchi",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Bronch/o", "meaning": "bronchial tube" },
    "suffix": { "part": "-spasm", "meaning": "sudden contraction of muscles" }
  },
   {
    "term": "Buccal",
    "definition": "Pertaining to the cheek",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Bucc/o", "meaning": "cheek" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
   {
    "term": "Bursitis",
    "definition": "Inflammation of a bursa",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Burs/o", "meaning": "bursa (sac of fluid near joint)" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },

  // === C Terms ===
  {
    "term": "Calcification", // Implied from 'Decalcification'
    "definition": "Process of hardening by calcium deposits",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Calc/i", "meaning": "calcium" },
    "suffix": { "part": "-fication", "meaning": "process of making" }
  },
   {
    "term": "Calcipenia", // Implied concept
    "definition": "Deficiency of calcium",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Calc/i", "meaning": "calcium" },
    "suffix": { "part": "-penia", "meaning": "deficiency" }
  },
  {
    "term": "Carcinogenesis",
    "definition": "Formation or production of cancer",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Carcin/o", "meaning": "cancer" },
    "suffix": { "part": "-genesis", "meaning": "producing, forming" }
  },
  {
    "term": "Carcinogenic",
    "definition": "Pertaining to producing cancer",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Carcin/o", "meaning": "cancer" },
    "suffix": { "part": "-genic", "meaning": "produced by or in" }
  },
   {
    "term": "Carcinoma",
    "definition": "Cancerous (malignant) tumor",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Carcin/o", "meaning": "cancer" },
    "suffix": { "part": "-oma", "meaning": "tumor, mass" }
  },
  {
    "term": "Cardiac",
    "definition": "Pertaining to the heart",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cardi/o", "meaning": "heart" },
    "suffix": { "part": "-ac", "meaning": "pertaining to" }
  },
  {
    "term": "Cardiology",
    "definition": "Study of the heart",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cardi/o", "meaning": "heart" },
    "suffix": { "part": "-logy", "meaning": "study of" }
  },
  {
    "term": "Cardiomegaly",
    "definition": "Enlargement of the heart",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cardi/o", "meaning": "heart" },
    "suffix": { "part": "-megaly", "meaning": "enlargement" }
  },
  {
    "term": "Cardiomyopathy",
    "definition": "Disease of heart muscle",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cardi/o", "meaning": "heart" }, // Also My/o for muscle
    "suffix": { "part": "-pathy", "meaning": "disease condition" }
  },
   {
    "term": "Carpal",
    "definition": "Pertaining to the wrist bones",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Carp/o", "meaning": "wrist bones (carpals)" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
   {
    "term": "Cauterization",
    "definition": "Destruction of tissue by burning",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cauter/o", "meaning": "heat, burn" },
    "suffix": { "part": "-ization", "meaning": "process of" }
  },
  {
    "term": "Cecal",
    "definition": "Pertaining to the cecum",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cec/o", "meaning": "cecum" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Celiac",
    "definition": "Pertaining to the abdomen",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Celi/o", "meaning": "belly, abdomen" },
    "suffix": { "part": "-ac", "meaning": "pertaining to" }
  },
  {
    "term": "Cephalgia",
    "definition": "Head pain; headache",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cephal/o", "meaning": "head" },
    "suffix": { "part": "-algia", "meaning": "pain" }
  },
  {
    "term": "Cephalic",
    "definition": "Pertaining to the head",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cephal/o", "meaning": "head" },
    "suffix": { "part": "-ic", "meaning": "pertaining to" }
  },
  {
    "term": "Cerebellar",
    "definition": "Pertaining to the cerebellum",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cerebell/o", "meaning": "cerebellum" },
    "suffix": { "part": "-ar", "meaning": "pertaining to" }
  },
  {
    "term": "Cerebral",
    "definition": "Pertaining to the cerebrum",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cerebr/o", "meaning": "cerebrum" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Cervical",
    "definition": "Pertaining to the neck of the body or neck-like lower portion of the uterus",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cervic/o", "meaning": "neck, cervix" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Cervicitis",
    "definition": "Inflammation of the cervix",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cervic/o", "meaning": "cervix, neck" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Cheilosis",
    "definition": "Abnormal condition of the lip",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cheil/o", "meaning": "lip" },
    "suffix": { "part": "-osis", "meaning": "condition, usually abnormal" }
  },
   {
    "term": "Chemotherapy",
    "definition": "Treatment using drugs",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Chem/o", "meaning": "drug, chemical" },
    "suffix": { "part": "-therapy", "meaning": "treatment" }
  },
  {
    "term": "Cholangiectasis",
    "definition": "Abnormal widening or dilation of a bile vessel (bile duct)",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cholangi/o", "meaning": "bile vessel, bile duct" },
    "suffix": { "part": "-ectasis", "meaning": "dilation, widening" }
  },
   {
    "term": "Cholangiocarcinoma",
    "definition": "Malignant tumor of bile vessels (bile ducts)",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cholangi/o", "meaning": "bile vessel" }, // also Carcin/o
    "suffix": { "part": "-carcinoma", "meaning": "cancerous tumor" } // Complex suffix
  },
  {
    "term": "Cholangiography",
    "definition": "X-ray recording of the biliary system",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cholangi/o", "meaning": "bile vessel, bile duct" },
    "suffix": { "part": "-graphy", "meaning": "process of recording" }
  },
  {
    "term": "Cholangitis",
    "definition": "Inflammation of bile vessels (bile ducts)",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cholangi/o", "meaning": "bile vessel, bile duct" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Cholecystectomy",
    "definition": "Removal (excision, resection) of the gallbladder",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cholecyst/o", "meaning": "gallbladder" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
   {
    "term": "Cholecystolithiasis",
    "definition": "Abnormal condition of stones in the gallbladder",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cholecyst/o", "meaning": "gallbladder" }, // also lith/o for stone
    "suffix": { "part": "-lithiasis", "meaning": "condition of stones" }
  },
  {
    "term": "Choledocholithiasis",
    "definition": "Abnormal condition of stones in the common bile duct",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Choledoch/o", "meaning": "common bile duct" }, // also lith/o for stone
    "suffix": { "part": "-lithiasis", "meaning": "condition of stones" }
  },
   {
    "term": "Cholelithiasis",
    "definition": "Abnormal condition of gallstones",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Chol/e", "meaning": "bile, gall" }, // also lith/o for stone
    "suffix": { "part": "-lithiasis", "meaning": "condition of stones" }
  },
   {
    "term": "Chondrocostal",
    "definition": "Pertaining to cartilage that is attached to the ribs",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Chondr/o", "meaning": "cartilage" }, // also Cost/o for rib
    "suffix": { "part": "-costal", "meaning": "pertaining to ribs" } // Complex suffix
  },
  {
    "term": "Chondroma",
    "definition": "Tumor of cartilage; benign",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Chondr/o", "meaning": "cartilage" },
    "suffix": { "part": "-oma", "meaning": "tumor, mass" }
  },
  {
    "term": "Chondromalacia",
    "definition": "Softening of cartilage",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Chondr/o", "meaning": "cartilage" },
    "suffix": { "part": "-malacia", "meaning": "softening" }
  },
  {
    "term": "Chondrosarcoma",
    "definition": "Malignant (cancerous) tumor of cartilage",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Chondr/o", "meaning": "cartilage" }, // also Sarc/o for flesh/connective tissue
    "suffix": { "part": "-sarcoma", "meaning": "malignant tumor of connective tissue" }
  },
  {
    "term": "Coagulopathy",
    "definition": "Disease of blood clotting",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Coagul/o", "meaning": "clotting" },
    "suffix": { "part": "-pathy", "meaning": "disease condition" }
  },
   {
    "term": "Colectomy",
    "definition": "Surgical removal (excision) of the colon",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Col/o", "meaning": "colon" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Colonic",
    "definition": "Pertaining to the colon",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Colon/o", "meaning": "colon" },
    "suffix": { "part": "-ic", "meaning": "pertaining to" }
  },
   {
    "term": "Colonoscopy",
    "definition": "Visual (endoscopic) examination of the colon",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Colon/o", "meaning": "colon" },
    "suffix": { "part": "-scopy", "meaning": "process of visual examination" }
  },
  {
    "term": "Colostomy",
    "definition": "New opening of the colon through the abdominal wall to the outside of the body",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Col/o", "meaning": "colon" },
    "suffix": { "part": "-stomy", "meaning": "new opening" }
  },
   {
    "term": "Colposcopy",
    "definition": "Visual examination of the vagina using an endoscope",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Colp/o", "meaning": "vagina" },
    "suffix": { "part": "-scopy", "meaning": "process of visual examination" }
  },
   {
    "term": "Costal", // Implied from Intercostal, Chondrocostal
    "definition": "Pertaining to the ribs",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cost/o", "meaning": "rib" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
   {
    "term": "Craniotomy",
    "definition": "Incision of the skull",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Crani/o", "meaning": "skull" },
    "suffix": { "part": "-tomy", "meaning": "incision, cutting into" }
  },
  {
    "term": "Cyanosis",
    "definition": "Abnormal condition of bluish coloration of the skin",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cyan/o", "meaning": "blue" },
    "suffix": { "part": "-osis", "meaning": "condition, usually abnormal" }
  },
  {
    "term": "Cystectomy",
    "definition": "Excision (removal) of the urinary bladder",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cyst/o", "meaning": "urinary bladder, sac" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Cystitis",
    "definition": "Inflammation of the urinary bladder",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cyst/o", "meaning": "urinary bladder, sac" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Cystocele",
    "definition": "Hernia of the urinary bladder",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cyst/o", "meaning": "urinary bladder, sac" },
    "suffix": { "part": "-cele", "meaning": "hernia" }
  },
  {
    "term": "Cystoscopy",
    "definition": "Visual examination of the urinary bladder",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cyst/o", "meaning": "urinary bladder, sac" },
    "suffix": { "part": "-scopy", "meaning": "process of visual examination" }
  },
  {
    "term": "Cystostomy",
    "definition": "New opening of the urinary bladder to the outside of the body",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cyst/o", "meaning": "urinary bladder, sac" },
    "suffix": { "part": "-stomy", "meaning": "new opening" }
  },
  {
    "term": "Cytology",
    "definition": "Study of cells",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Cyt/o", "meaning": "cell" },
    "suffix": { "part": "-logy", "meaning": "study of" }
  },
  {
    "term": "Dacryoadenitis",
    "definition": "Inflammation of tear glands",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Dacry/o", "meaning": "tears" }, // Also Aden/o for gland
    "suffix": { "part": "-adenitis", "meaning": "inflammation of a gland" } // Complex suffix
  },
   {
    "term": "Decalcification",
    "definition": "Loss of calcium from bones",
    "prefix": { "part": "De-", "meaning": "lack of, down, less, removal of" },
    "root": { "part": "calc/i", "meaning": "calcium" },
    "suffix": { "part": "-fication", "meaning": "process of making" }
  },
  {
    "term": "Dehydration",
    "definition": "Excessive loss of water",
    "prefix": { "part": "De-", "meaning": "lack of, down, less, removal of" },
    "root": { "part": "hydr/o", "meaning": "water" },
    "suffix": { "part": "-ation", "meaning": "process, condition" }
  },
  {
    "term": "Demyelination",
    "definition": "Destruction of myelin on axons of nerve cells",
    "prefix": { "part": "De-", "meaning": "lack of, down, less, removal of" },
    "root": { "part": "myelin/o", "meaning": "myelin sheath" },
    "suffix": { "part": "-ation", "meaning": "process, condition" }
  },
  {
    "term": "Dentalgia",
    "definition": "Pain in a tooth",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Dent/i", "meaning": "tooth" },
    "suffix": { "part": "-algia", "meaning": "pain" }
  },
   {
    "term": "Dentibuccal",
    "definition": "Pertaining to the teeth and cheek",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Dent/i", "meaning": "tooth" }, // Also Bucc/o for cheek
    "suffix": { "part": "-buccal", "meaning": "pertaining to the cheek" } // Complex suffix
  },
   {
    "term": "Dermatitis",
    "definition": "Inflammation of the skin",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Dermat/o", "meaning": "skin" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Dermatology",
    "definition": "Study of the skin",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Derm/o", "meaning": "skin" },
    "suffix": { "part": "-logy", "meaning": "study of" }
  },
  {
    "term": "Dermatomycosis", // Implied from Dermatophytosis
    "definition": "Fungal infection of the skin",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Dermat/o", "meaning": "skin" }, // Also Myc/o for fungus
    "suffix": { "part": "-mycosis", "meaning": "abnormal condition of fungus" } // Complex suffix
  },
  {
    "term": "Dermatophytosis",
    "definition": "Fungal infection of the skin",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Dermat/o", "meaning": "skin" }, // Also phyt/o for plant (fungus)
    "suffix": { "part": "-phytosis", "meaning": "abnormal condition caused by fungus/plant" } // Complex suffix
  },
  {
    "term": "Diarrhea",
    "definition": "Frequent passage of loose, watery stools",
    "prefix": { "part": "Dia-", "meaning": "through, complete" },
    "root": { "part": null, "meaning": null }, // Root implied
    "suffix": { "part": "-rrhea", "meaning": "flow, discharge" }
  },
  {
    "term": "Diplopia",
    "definition": "Double vision",
    "prefix": { "part": "Dipl/o", "meaning": "double" }, // Prefix/root combo
    "root": { "part": null, "meaning": null },
    "suffix": { "part": "-opia", "meaning": "vision" }
  },
  {
    "term": "Dorsal",
    "definition": "Pertaining to the back",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Dors/o", "meaning": "back (of body)" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Duodenal",
    "definition": "Pertaining to the duodenum",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Duoden/o", "meaning": "duodenum" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Dyskinesia",
    "definition": "Impairment of the ability to perform voluntary movements",
    "prefix": { "part": "Dys-", "meaning": "bad, painful, difficult, abnormal" },
    "root": { "part": "kinesi/o", "meaning": "movement" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
   {
    "term": "Dysmenorrhea",
    "definition": "Painful, difficult menses (menstruation)",
    "prefix": { "part": "Dys-", "meaning": "bad, painful, difficult, abnormal" },
    "root": { "part": "Men/o", "meaning": "menstruation" },
    "suffix": { "part": "-rrhea", "meaning": "flow, discharge" }
  },
  {
    "term": "Dyspareunia",
    "definition": "Painful sexual intercourse",
    "prefix": { "part": "Dys-", "meaning": "bad, painful, difficult, abnormal" },
    "root": { "part": "pareun/o", "meaning": "sexual intercourse" }, // Less common root
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
  {
    "term": "Dyspepsia",
    "definition": "Painful digestion; indigestion",
    "prefix": { "part": "Dys-", "meaning": "bad, painful, difficult, abnormal" },
    "root": { "part": "peps/o", "meaning": "digestion" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
  {
    "term": "Dysphagia",
    "definition": "Difficulty in swallowing",
    "prefix": { "part": "Dys-", "meaning": "bad, painful, difficult, abnormal" },
    "root": { "part": "phag/o", "meaning": "eating, swallowing" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
  {
    "term": "Dysphonia",
    "definition": "Abnormal voice or sound produced when speaking",
    "prefix": { "part": "Dys-", "meaning": "bad, painful, difficult, abnormal" },
    "root": { "part": "phon/o", "meaning": "voice, sound" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
  {
    "term": "Dysplasia",
    "definition": "Condition of abnormal formation",
    "prefix": { "part": "Dys-", "meaning": "bad, painful, difficult, abnormal" },
    "root": { "part": null, "meaning": null }, // Root implied
    "suffix": { "part": "-plasia", "meaning": "development, formation, growth" }
  },
  {
    "term": "Dyspnea",
    "definition": "Difficult breathing",
    "prefix": { "part": "Dys-", "meaning": "bad, painful, difficult, abnormal" },
    "root": { "part": "pne/o", "meaning": "breathing" },
    "suffix": { "part": "-a", "meaning": "condition/state" } // Often implied
  },
   {
    "term": "Dystrophy",
    "definition": "Condition of abnormal development",
    "prefix": { "part": "Dys-", "meaning": "bad, painful, difficult, abnormal" },
    "root": { "part": null, "meaning": null }, // Root (troph/o) implied
    "suffix": { "part": "-trophy", "meaning": "development, nourishment" }
  },
  {
    "term": "Dysuria",
    "definition": "Painful urination",
    "prefix": { "part": "Dys-", "meaning": "bad, painful, difficult, abnormal" },
    "root": { "part": "ur/o", "meaning": "urine, urinary tract" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },

  // === E Terms ===
  {
    "term": "Ecchymosis",
    "definition": "Bleeding into the skin; a bruise",
    "prefix": { "part": "Ec-", "meaning": "out, outside" },
    "root": { "part": "chym/o", "meaning": "to pour" }, // Relates to pouring out of blood
    "suffix": { "part": "-osis", "meaning": "condition, usually abnormal" }
  },
  {
    "term": "Electrocardiogram",
    "definition": "Record of the electricity within the heart",
    "prefix": { "part": "Electr/o", "meaning": "electricity" },
    "root": { "part": "Cardi/o", "meaning": "heart" },
    "suffix": { "part": "-gram", "meaning": "record" }
  },
  {
    "term": "Electrocardiography",
    "definition": "Process of recording the electricity within the heart",
    "prefix": { "part": "Electr/o", "meaning": "electricity" },
    "root": { "part": "Cardi/o", "meaning": "heart" },
    "suffix": { "part": "-graphy", "meaning": "process of recording" }
  },
  {
    "term": "Electroencephalogram",
    "definition": "Record of the electricity in the brain",
    "prefix": { "part": "Electr/o", "meaning": "electricity" },
    "root": { "part": "Encephal/o", "meaning": "brain" },
    "suffix": { "part": "-gram", "meaning": "record" }
  },
  {
    "term": "Electroencephalography",
    "definition": "Process of recording the electricity in the brain",
    "prefix": { "part": "Electr/o", "meaning": "electricity" },
    "root": { "part": "Encephal/o", "meaning": "brain" },
    "suffix": { "part": "-graphy", "meaning": "process of recording" }
  },
  {
    "term": "Electromyography",
    "definition": "Recording the electrical activity of muscle tissue",
    "prefix": { "part": "Electr/o", "meaning": "electricity" },
    "root": { "part": "My/o", "meaning": "muscle" },
    "suffix": { "part": "-graphy", "meaning": "process of recording" }
  },
  {
    "term": "Embolus", // Singular form
    "definition": "Clot of material that travels through the bloodstream and suddenly blocks a vessel",
    "prefix": { "part": "Em-", "meaning": "in" },
    "root": { "part": "bol/o", "meaning": "to cast, throw" },
    "suffix": { "part": "-us", "meaning": "thing, structure" } // General suffix
  },
   {
    "term": "Emphysema",
    "definition": "Hyperinflation of air sacs with destruction of alveolar walls",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "phys/o", "meaning": "to grow, inflate" }, // Root connection less direct
    "suffix": { "part": "-ema", "meaning": "condition" }
  },
  {
    "term": "Encephalitis",
    "definition": "Inflammation of the brain",
    "prefix": { "part": "En-", "meaning": "in, within" },
    "root": { "part": "Cephal/o", "meaning": "head (brain)" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Encephalopathy",
    "definition": "Disease of the brain",
    "prefix": { "part": "En-", "meaning": "in, within" },
    "root": { "part": "Cephal/o", "meaning": "head (brain)" },
    "suffix": { "part": "-pathy", "meaning": "disease condition" }
  },
  {
    "term": "Endarterectomy",
    "definition": "Surgical removal of plaque from the inner layer of an artery",
    "prefix": { "part": "End(o)-", "meaning": "in, within" }, // Endo shortened
    "root": { "part": "Arteri/o", "meaning": "artery" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
   {
    "term": "Endocarditis",
    "definition": "Inflammation of the inner lining of the heart",
    "prefix": { "part": "Endo-", "meaning": "in, within" },
    "root": { "part": "Cardi/o", "meaning": "heart" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Endocervicitis",
    "definition": "Inflammation of the inner lining of the cervix",
    "prefix": { "part": "Endo-", "meaning": "in, within" },
    "root": { "part": "Cervic/o", "meaning": "cervix, neck" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Endocrinology",
    "definition": "Study of the endocrine glands",
    "prefix": { "part": "Endo-", "meaning": "in, within" },
    "root": { "part": "crin/o", "meaning": "to secrete" },
    "suffix": { "part": "-logy", "meaning": "study of" }
  },
  {
    "term": "Endometriosis",
    "definition": "Abnormal condition of endometrial tissue located outside the uterus",
    "prefix": { "part": "Endo-", "meaning": "in, within" },
    "root": { "part": "Metri/o", "meaning": "uterus" },
    "suffix": { "part": "-osis", "meaning": "condition, usually abnormal" }
  },
   {
    "term": "Endometritis",
    "definition": "Inflammation of the inner lining of the uterus",
    "prefix": { "part": "Endo-", "meaning": "in, within" },
    "root": { "part": "Metri/o", "meaning": "uterus" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
   {
    "term": "Endoscope",
    "definition": "Instrument to visually examine the interior of the body",
    "prefix": { "part": "Endo-", "meaning": "in, within" },
    "root": { "part": null, "meaning": null }, // Root implied
    "suffix": { "part": "-scope", "meaning": "instrument for visual examination" }
  },
  {
    "term": "Endoscopy",
    "definition": "Process of visual examination within the body",
    "prefix": { "part": "Endo-", "meaning": "in, within" },
    "root": { "part": null, "meaning": null }, // Root implied
    "suffix": { "part": "-scopy", "meaning": "process of visual examination" }
  },
   {
    "term": "Endotracheal",
    "definition": "Pertaining to within the trachea",
    "prefix": { "part": "Endo-", "meaning": "in, within" },
    "root": { "part": "Trache/o", "meaning": "trachea (windpipe)" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Enteritis",
    "definition": "Inflammation of the small intestine",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Enter/o", "meaning": "intestines (usually small)" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Enterocolitis",
    "definition": "Inflammation of the small intestine and colon",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Enter/o", "meaning": "intestines (usually small)" }, // Also Col/o for colon
    "suffix": { "part": "-colitis", "meaning": "inflammation of the colon" } // Complex suffix
  },
  {
    "term": "Eosinophil",
    "definition": "White blood cell containing dark granules that stain rosy with eosin",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Eosin/o", "meaning": "rosy, acidic dye" },
    "suffix": { "part": "-phil", "meaning": "attraction for" }
  },
  {
    "term": "Epidermis",
    "definition": "Outer layer of the skin",
    "prefix": { "part": "Epi-", "meaning": "above, upon, on" },
    "root": { "part": "Derm/o", "meaning": "skin" },
    "suffix": { "part": "-is", "meaning": "structure, thing" } // General suffix
  },
   {
    "term": "Epididymitis",
    "definition": "Inflammation of an epididymis",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Epididym/o", "meaning": "epididymis" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Epigastric",
    "definition": "Pertaining to above or upon the stomach",
    "prefix": { "part": "Epi-", "meaning": "above, upon, on" },
    "root": { "part": "Gastr/o", "meaning": "stomach" },
    "suffix": { "part": "-ic", "meaning": "pertaining to" }
  },
  {
    "term": "Epiglottitis",
    "definition": "Inflammation of the epiglottis",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Epiglott/o", "meaning": "epiglottis" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
   {
    "term": "Episiotomy",
    "definition": "Incision of the vulva (perineum)",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Episi/o", "meaning": "vulva" },
    "suffix": { "part": "-tomy", "meaning": "incision, cutting into" }
  },
  {
    "term": "Erythema",
    "definition": "Condition of redness of the skin",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Erythem/o", "meaning": "redness" }, // Or Erythr/o
    "suffix": { "part": "-a", "meaning": "condition/state" }
  },
   {
    "term": "Erythroblast",
    "definition": "Immature, developing red blood cell",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Erythr/o", "meaning": "red" },
    "suffix": { "part": "-blast", "meaning": "immature cell, embryonic" }
  },
  {
    "term": "Erythrocyte",
    "definition": "Red blood cell",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Erythr/o", "meaning": "red" },
    "suffix": { "part": "-cyte", "meaning": "cell" }
  },
  {
    "term": "Erythropenia",
    "definition": "Deficiency of red blood cells",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Erythr/o", "meaning": "red" }, // Root(cyt/o) for cell implied
    "suffix": { "part": "-penia", "meaning": "deficiency" }
  },
  {
    "term": "Erythropoiesis",
    "definition": "Formation of red blood cells",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Erythr/o", "meaning": "red" },
    "suffix": { "part": "-poiesis", "meaning": "formation" }
  },
   {
    "term": "Esophageal",
    "definition": "Pertaining to the esophagus",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Esophag/o", "meaning": "esophagus" },
    "suffix": { "part": "-eal", "meaning": "pertaining to" }
  },
  {
    "term": "Esophagitis", // Implicit term
    "definition": "Inflammation of the esophagus",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Esophag/o", "meaning": "esophagus" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
   {
    "term": "Euthyroid",
    "definition": "Normal thyroid function",
    "prefix": { "part": "Eu-", "meaning": "good, normal" },
    "root": { "part": "Thyroid/o", "meaning": "thyroid gland" },
    "suffix": { "part": null, "meaning": null } // Condition implied
  },
   {
    "term": "Excision",
    "definition": "Process of cutting out; removal; resection",
    "prefix": { "part": "Ex-", "meaning": "out, away from" },
    "root": { "part": "cis/o", "meaning": "to cut" },
    "suffix": { "part": "-ion", "meaning": "process" }
  },
  {
    "term": "Exophthalmos",
    "definition": "Protrusion of the eyeball",
    "prefix": { "part": "Ex-", "meaning": "out, away from" },
    "root": { "part": "ophthalm/o", "meaning": "eye" },
    "suffix": { "part": "-os", "meaning": "condition" } // Less common suffix for condition
  },

  // === F Terms ===
  {
    "term": "Fasciitis", // Implied from Fasciotomy
    "definition": "Inflammation of the fascia",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Fasci/o", "meaning": "fascia (band)" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Fasciotomy",
    "definition": "Incision of fascia",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Fasci/o", "meaning": "fascia (band)" },
    "suffix": { "part": "-tomy", "meaning": "incision, cutting into" }
  },
   {
    "term": "Femoral",
    "definition": "Pertaining to the femur",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Femor/o", "meaning": "femur (thigh bone)" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
   {
    "term": "Fibromyalgia",
    "definition": "Chronic pain and stiffness in muscles and fibrous tissue",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Fibr/o", "meaning": "fibrous tissue" }, // Also My/o for muscle
    "suffix": { "part": "-algia", "meaning": "pain" }
  },
  {
    "term": "Fibrosarcoma",
    "definition": "Malignant tumor of fibrous or connective tissue",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Fibr/o", "meaning": "fibrous tissue" }, // Also Sarc/o for flesh/connective tissue
    "suffix": { "part": "-sarcoma", "meaning": "malignant tumor of connective tissue" }
  },
  {
    "term": "Fibrosis",
    "definition": "Abnormal condition (proliferation) of fibrous connective tissue",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Fibr/o", "meaning": "fibrous tissue" },
    "suffix": { "part": "-osis", "meaning": "condition, usually abnormal" }
  },
  
  // Add these terms after the last 'F' term object, ensuring a comma before the first '{' here.

  // === G Terms ===
  {
    "term": "Galactorrhea",
    "definition": "Excessive or abnormal secretion of milk after breast-feeding has ended",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Galact/o", "meaning": "milk" },
    "suffix": { "part": "-rrhea", "meaning": "flow, discharge" }
  },
  {
    "term": "Gastrectomy",
    "definition": "Removal or excision of the stomach",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Gastr/o", "meaning": "stomach" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Gastric",
    "definition": "Pertaining to the stomach",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Gastr/o", "meaning": "stomach" },
    "suffix": { "part": "-ic", "meaning": "pertaining to" }
  },
  {
    "term": "Gastroenteritis",
    "definition": "Inflammation of the stomach and intestines",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Gastr/o", "meaning": "stomach" }, // Also Enter/o for intestines
    "suffix": { "part": "-enteritis", "meaning": "inflammation of intestines" } // Complex suffix
  },
  {
    "term": "Gastroenterology",
    "definition": "Study of the stomach and intestines",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Gastr/o", "meaning": "stomach" }, // Also Enter/o for intestines
    "suffix": { "part": "-logy", "meaning": "study of" }
  },
   {
    "term": "Gastrorrhagia",
    "definition": "Hemorrhage of blood (excessive bleeding) from the stomach",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Gastr/o", "meaning": "stomach" },
    "suffix": { "part": "-rrhagia", "meaning": "bursting forth (of blood)" }
  },
  {
    "term": "Gastrostomy",
    "definition": "New opening of the stomach through the abdominal wall to the outside of the body",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Gastr/o", "meaning": "stomach" },
    "suffix": { "part": "-stomy", "meaning": "new opening" }
  },
  {
    "term": "Gastrotomy",
    "definition": "Incision of the stomach",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Gastr/o", "meaning": "stomach" },
    "suffix": { "part": "-tomy", "meaning": "incision, cutting into" }
  },
  {
    "term": "Gingivectomy",
    "definition": "Removal of gum disease", // Simplification, original is 'removal of gum'
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Gingiv/o", "meaning": "gums" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Gingivitis",
    "definition": "Inflammation of gums",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Gingiv/o", "meaning": "gums" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Glossectomy",
    "definition": "Removal of the tongue",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Gloss/o", "meaning": "tongue" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Glossitis", // Implied term
    "definition": "Inflammation of the tongue",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Gloss/o", "meaning": "tongue" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Glycosuria",
    "definition": "Sugar in the urine",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Glyc/o", "meaning": "sugar" }, // Also -os/e for sugar
    "suffix": { "part": "-uria", "meaning": "urination, urine condition" }
  },
  {
    "term": "Granulocyte",
    "definition": "White blood cell with cytoplasmic granules",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Granul/o", "meaning": "granule" },
    "suffix": { "part": "-cyte", "meaning": "cell" }
  },
  {
    "term": "Granulocytopenia",
    "definition": "Deficiency of granulocytes",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Granul/o", "meaning": "granule" }, // Root (cyt/o) implied
    "suffix": { "part": "-cytopenia", "meaning": "deficiency of cells" } // Complex suffix
  },
  {
    "term": "Granulocytosis",
    "definition": "Increased numbers of granulocytes in the blood",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Granul/o", "meaning": "granule" }, // Root (cyt/o) implied
    "suffix": { "part": "-cytosis", "meaning": "abnormal condition of cells (increase)" } // Complex suffix
  },
  {
    "term": "Gynecology",
    "definition": "Study of the disorders of the female reproductive system",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Gynec/o", "meaning": "woman, female" },
    "suffix": { "part": "-logy", "meaning": "study of" }
  },
  {
    "term": "Gynecomastia",
    "definition": "Female-like breast enlargement in a male",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Gynec/o", "meaning": "woman, female" }, // Also Mast/o for breast
    "suffix": { "part": "-mastia", "meaning": "condition of the breast" } // Complex suffix
  },

  // === H Terms ===
  {
    "term": "Hemarthrosis",
    "definition": "Condition of blood in a joint",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hem/o", "meaning": "blood" }, // Also Arthr/o for joint
    "suffix": { "part": "-osis", "meaning": "condition, usually abnormal" }
  },
  {
    "term": "Hematemesis",
    "definition": "Vomiting blood",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hemat/o", "meaning": "blood" },
    "suffix": { "part": "-emesis", "meaning": "vomiting" }
  },
  {
    "term": "Hematochezia",
    "definition": "Passage of bright red blood from the rectum",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hemat/o", "meaning": "blood" },
    "suffix": { "part": "-chezia", "meaning": "defecation, elimination of wastes" } // Suffix connection indirect
  },
  {
    "term": "Hematocrit",
    "definition": "Percentage of red blood cells in a given volume of blood", // Definition simplified
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hemat/o", "meaning": "blood" },
    "suffix": { "part": "-crit", "meaning": "to separate" }
  },
  {
    "term": "Hematology",
    "definition": "Study of blood and blood disorders",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hemat/o", "meaning": "blood" },
    "suffix": { "part": "-logy", "meaning": "study of" }
  },
  {
    "term": "Hematoma",
    "definition": "Collection or mass of blood",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hemat/o", "meaning": "blood" },
    "suffix": { "part": "-oma", "meaning": "tumor, mass, collection" }
  },
  {
    "term": "Hematopoiesis",
    "definition": "Formation of blood cells in bone marrow",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hemat/o", "meaning": "blood" },
    "suffix": { "part": "-poiesis", "meaning": "formation" }
  },
  {
    "term": "Hematuria",
    "definition": "Blood in the urine",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hemat/o", "meaning": "blood" },
    "suffix": { "part": "-uria", "meaning": "urination, urine condition" }
  },
  {
    "term": "Hemiglossectomy",
    "definition": "Removal (resection) of half the tongue",
    "prefix": { "part": "Hemi-", "meaning": "half" },
    "root": { "part": "Gloss/o", "meaning": "tongue" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Hemiparesis",
    "definition": "Slight paralysis of the right or left half of the body",
    "prefix": { "part": "Hemi-", "meaning": "half" },
    "root": { "part": null, "meaning": null },
    "suffix": { "part": "-paresis", "meaning": "weakness, slight paralysis" }
  },
  {
    "term": "Hemiplegia",
    "definition": "Paralysis of the right or left half of the body",
    "prefix": { "part": "Hemi-", "meaning": "half" },
    "root": { "part": null, "meaning": null },
    "suffix": { "part": "-plegia", "meaning": "paralysis" }
  },
  {
    "term": "Hemodialysis",
    "definition": "Removal of nitrogenous waste from the blood (using a machine)",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hem/o", "meaning": "blood" },
    "suffix": { "part": "-dialysis", "meaning": "to separate completely" }
  },
  {
    "term": "Hemolysis",
    "definition": "Destruction of red blood cells",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hem/o", "meaning": "blood" },
    "suffix": { "part": "-lysis", "meaning": "breakdown, destruction, separation" }
  },
  {
    "term": "Hemoptysis",
    "definition": "Spitting up blood from the respiratory tract",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hem/o", "meaning": "blood" },
    "suffix": { "part": "-ptysis", "meaning": "spitting" }
  },
  {
    "term": "Hemorrhage",
    "definition": "Bursting forth or excessive flow of blood",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hem/o", "meaning": "blood" },
    "suffix": { "part": "-rrhage", "meaning": "bursting forth (of blood)" }
  },
  {
    "term": "Hemostasis",
    "definition": "Stoppage of bleeding or the flow of blood",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hem/o", "meaning": "blood" },
    "suffix": { "part": "-stasis", "meaning": "stopping, controlling" }
  },
  {
    "term": "Hemothorax",
    "definition": "Blood in the chest (pleural cavity) surrounding the lungs",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hem/o", "meaning": "blood" }, // Also Thorac/o for chest
    "suffix": { "part": "-thorax", "meaning": "chest, pleural cavity" } // Complex suffix
  },
  {
    "term": "Hepatitis",
    "definition": "Inflammation of the liver",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hepat/o", "meaning": "liver" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Hepatoma",
    "definition": "Tumor (cancerous) of the liver",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hepat/o", "meaning": "liver" },
    "suffix": { "part": "-oma", "meaning": "tumor, mass" }
  },
  {
    "term": "Hepatomegaly",
    "definition": "Enlargement of the liver",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hepat/o", "meaning": "liver" },
    "suffix": { "part": "-megaly", "meaning": "enlargement" }
  },
  {
    "term": "Herniorrhaphy",
    "definition": "Suture (stitching or sewing up) a hernia",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Herni/o", "meaning": "hernia" },
    "suffix": { "part": "-rrhaphy", "meaning": "suture" }
  },
  {
    "term": "Histology",
    "definition": "Study of tissues",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hist/o", "meaning": "tissue" },
    "suffix": { "part": "-logy", "meaning": "study of" }
  },
  {
    "term": "Homeostasis",
    "definition": "Tendency in an organism to return to a state of constancy and stability", // Definition simplified
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Home/o", "meaning": "sameness, unchanging" },
    "suffix": { "part": "-stasis", "meaning": "stopping, controlling" }
  },
  {
    "term": "Humeral",
    "definition": "Pertaining to the humerus (upper arm bone)",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Humer/o", "meaning": "humerus" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Hydrarthrosis",
    "definition": "Condition of water or fluid in a joint",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hydr/o", "meaning": "water, fluid" }, // Also Arthr/o for joint
    "suffix": { "part": "-osis", "meaning": "condition, usually abnormal" }
  },
  {
    "term": "Hydrocele",
    "definition": "Hernia (sac of clear, watery fluid) within the scrotum",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hydr/o", "meaning": "water, fluid" },
    "suffix": { "part": "-cele", "meaning": "hernia" }
  },
  {
    "term": "Hydrocephalus",
    "definition": "Abnormal accumulation of cerebrospinal fluid in the ventricles of the brain",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hydr/o", "meaning": "water, fluid" }, // Also Cephal/o for head
    "suffix": { "part": "-cephalus", "meaning": "head" } // Complex suffix
  },
  {
    "term": "Hydronephrosis",
    "definition": "Abnormal condition of excess backup of fluid (urine) in the kidney",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hydr/o", "meaning": "water, fluid" }, // Also Nephr/o for kidney
    "suffix": { "part": "-nephrosis", "meaning": "abnormal condition of the kidney" } // Complex suffix
  },
  {
    "term": "Hydrotherapy",
    "definition": "Treatment using water",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hydr/o", "meaning": "water, fluid" },
    "suffix": { "part": "-therapy", "meaning": "treatment" }
  },
  {
    "term": "Hypercalcemia",
    "definition": "High levels of calcium in blood",
    "prefix": { "part": "Hyper-", "meaning": "excessive, above, high" },
    "root": { "part": "calc/i", "meaning": "calcium" },
    "suffix": { "part": "-emia", "meaning": "blood condition" }
  },
  {
    "term": "Hypercalciuria",
    "definition": "High levels of calcium in urine",
    "prefix": { "part": "Hyper-", "meaning": "excessive, above, high" },
    "root": { "part": "calc/i", "meaning": "calcium" },
    "suffix": { "part": "-uria", "meaning": "urination, urine condition" }
  },
  {
    "term": "Hypercapnia",
    "definition": "Increased levels of carbon dioxide in the bloodstream",
    "prefix": { "part": "Hyper-", "meaning": "excessive, above, high" },
    "root": { "part": "capn/o", "meaning": "carbon dioxide" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
  {
    "term": "Hypercholesterolemia",
    "definition": "High levels of cholesterol in the blood",
    "prefix": { "part": "Hyper-", "meaning": "excessive, above, high" },
    "root": { "part": "cholesterol/o", "meaning": "cholesterol" }, // Also sterol/o
    "suffix": { "part": "-emia", "meaning": "blood condition" }
  },
  {
    "term": "Hyperglycemia",
    "definition": "High levels of sugar in the bloodstream",
    "prefix": { "part": "Hyper-", "meaning": "excessive, above, high" },
    "root": { "part": "Glyc/o", "meaning": "sugar" },
    "suffix": { "part": "-emia", "meaning": "blood condition" }
  },
  {
    "term": "Hyperkalemia",
    "definition": "Condition of high concentration of potassium in blood",
    "prefix": { "part": "Hyper-", "meaning": "excessive, above, high" },
    "root": { "part": "kal/i", "meaning": "potassium" },
    "suffix": { "part": "-emia", "meaning": "blood condition" }
  },
  {
    "term": "Hyperkinesis",
    "definition": "Excessive movement",
    "prefix": { "part": "Hyper-", "meaning": "excessive, above, high" },
    "root": { "part": "kinesi/o", "meaning": "movement" },
    "suffix": { "part": "-is", "meaning": "condition" } // General suffix
  },
   {
    "term": "Hypernatremia",
    "definition": "Abnormally high levels of sodium in the bloodstream",
    "prefix": { "part": "Hyper-", "meaning": "excessive, above, high" },
    "root": { "part": "natr/o", "meaning": "sodium" },
    "suffix": { "part": "-emia", "meaning": "blood condition" }
  },
  {
    "term": "Hyperplasia",
    "definition": "Condition of increased formation of cells",
    "prefix": { "part": "Hyper-", "meaning": "excessive, above, high" },
    "root": { "part": null, "meaning": null }, // Root implied
    "suffix": { "part": "-plasia", "meaning": "development, formation, growth" }
  },
   {
    "term": "Hyperpnea",
    "definition": "Increase in breathing rate",
    "prefix": { "part": "Hyper-", "meaning": "excessive, above, high" },
    "root": { "part": "pne/o", "meaning": "breathing" },
    "suffix": { "part": "-a", "meaning": "condition/state" }
  },
  {
    "term": "Hypertension",
    "definition": "High blood pressure",
    "prefix": { "part": "Hyper-", "meaning": "excessive, above, high" },
    "root": { "part": "tens/o", "meaning": "pressure" },
    "suffix": { "part": "-ion", "meaning": "process" }
  },
  {
    "term": "Hyperthyroidism",
    "definition": "Condition of increased secretion of thyroid gland hormones",
    "prefix": { "part": "Hyper-", "meaning": "excessive, above, high" },
    "root": { "part": "Thyroid/o", "meaning": "thyroid gland" },
    "suffix": { "part": "-ism", "meaning": "process, condition" }
  },
  {
    "term": "Hypertrophy",
    "definition": "Increase in size of tissue or an organ due to increase in size of individual cells",
    "prefix": { "part": "Hyper-", "meaning": "excessive, above, high" },
    "root": { "part": null, "meaning": null }, // Root (troph/o) implied
    "suffix": { "part": "-trophy", "meaning": "development, nourishment" }
  },
   {
    "term": "Hyperuricemia",
    "definition": "Increase in uric acid in the blood",
    "prefix": { "part": "Hyper-", "meaning": "excessive, above, high" },
    "root": { "part": "uric/o", "meaning": "uric acid" },
    "suffix": { "part": "-emia", "meaning": "blood condition" }
  },
   {
    "term": "Hypocalcemia",
    "definition": "Low levels of calcium in blood",
    "prefix": { "part": "Hypo-", "meaning": "deficient, below, under, less than normal" },
    "root": { "part": "calc/i", "meaning": "calcium" },
    "suffix": { "part": "-emia", "meaning": "blood condition" }
  },
   {
    "term": "Hypodermic",
    "definition": "Pertaining to under the skin",
    "prefix": { "part": "Hypo-", "meaning": "deficient, below, under, less than normal" },
    "root": { "part": "Derm/o", "meaning": "skin" },
    "suffix": { "part": "-ic", "meaning": "pertaining to" }
  },
  {
    "term": "Hypogastric",
    "definition": "Pertaining to below the stomach",
    "prefix": { "part": "Hypo-", "meaning": "deficient, below, under, less than normal" },
    "root": { "part": "Gastr/o", "meaning": "stomach" },
    "suffix": { "part": "-ic", "meaning": "pertaining to" }
  },
  {
    "term": "Hypoglossal",
    "definition": "Pertaining to under the tongue",
    "prefix": { "part": "Hypo-", "meaning": "deficient, below, under, less than normal" },
    "root": { "part": "Gloss/o", "meaning": "tongue" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Hypoglycemia",
    "definition": "Low/deficient levels of sugar in blood",
    "prefix": { "part": "Hypo-", "meaning": "deficient, below, under, less than normal" },
    "root": { "part": "Glyc/o", "meaning": "sugar" },
    "suffix": { "part": "-emia", "meaning": "blood condition" }
  },
   {
    "term": "Hypokalemia",
    "definition": "Low levels of potassium in blood",
    "prefix": { "part": "Hypo-", "meaning": "deficient, below, under, less than normal" },
    "root": { "part": "kal/i", "meaning": "potassium" },
    "suffix": { "part": "-emia", "meaning": "blood condition" }
  },
   {
    "term": "Hyponatremia",
    "definition": "Low levels of sodium in blood",
    "prefix": { "part": "Hypo-", "meaning": "deficient, below, under, less than normal" },
    "root": { "part": "natr/o", "meaning": "sodium" },
    "suffix": { "part": "-emia", "meaning": "blood condition" }
  },
   {
    "term": "Hypophysectomy",
    "definition": "Removal of the pituitary gland",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hypophys/o", "meaning": "pituitary gland" }, // Hypophysis = pituitary gland
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
   {
    "term": "Hypopituitarism",
    "definition": "Deficient secretion of hormones from the pituitary gland",
    "prefix": { "part": "Hypo-", "meaning": "deficient, below, under, less than normal" },
    "root": { "part": "pituitar/o", "meaning": "pituitary gland" },
    "suffix": { "part": "-ism", "meaning": "process, condition" }
  },
  {
    "term": "Hypothyroidism",
    "definition": "Decreased secretion of hormones from the thyroid gland",
    "prefix": { "part": "Hypo-", "meaning": "deficient, below, under, less than normal" },
    "root": { "part": "Thyroid/o", "meaning": "thyroid gland" },
    "suffix": { "part": "-ism", "meaning": "process, condition" }
  },
  {
    "term": "Hypoxia",
    "definition": "Deficiency of oxygen in tissues",
    "prefix": { "part": "Hypo-", "meaning": "deficient, below, under, less than normal" },
    "root": { "part": "ox/o", "meaning": "oxygen" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
  {
    "term": "Hysterectomy",
    "definition": "Removal of the uterus",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hyster/o", "meaning": "uterus, womb" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Hysterosalpingography",
    "definition": "X-ray imaging of the uterus and fallopian tubes",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hyster/o", "meaning": "uterus" }, // Also Salping/o for fallopian tube
    "suffix": { "part": "-salpingography", "meaning": "process of recording fallopian tubes" } // Complex suffix
  },
  {
    "term": "Hysteroscopy",
    "definition": "Visual examination (endoscopic) of the uterus",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Hyster/o", "meaning": "uterus, womb" },
    "suffix": { "part": "-scopy", "meaning": "process of visual examination" }
  },

  // === I Terms ===
  {
    "term": "Iatrogenic",
    "definition": "Pertaining to produced by a treatment or a procedure",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Iatr/o", "meaning": "treatment, physician" },
    "suffix": { "part": "-genic", "meaning": "produced by or in" }
  },
  {
    "term": "Ichthyosis",
    "definition": "Hereditary condition in which the skin resembles fish scales",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ichthy/o", "meaning": "dry, scaly (fish-like)" },
    "suffix": { "part": "-osis", "meaning": "condition, usually abnormal" }
  },
  {
    "term": "Ileitis",
    "definition": "Inflammation of the ileum",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ile/o", "meaning": "ileum" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Ileostomy",
    "definition": "New opening of the ileum to the outside of the body",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ile/o", "meaning": "ileum" },
    "suffix": { "part": "-stomy", "meaning": "new opening" }
  },
  {
    "term": "Immunology", // Implied term
    "definition": "Study of the immune system",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Immun/o", "meaning": "protection, immune" },
    "suffix": { "part": "-logy", "meaning": "study of" }
  },
  {
    "term": "Immunotherapy",
    "definition": "Cancer treatment using immune cells and antibodies",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Immun/o", "meaning": "protection, immune" },
    "suffix": { "part": "-therapy", "meaning": "treatment" }
  },
  {
    "term": "Incision",
    "definition": "Process of cutting into the body",
    "prefix": { "part": "In-", "meaning": "in, into" },
    "root": { "part": "cis/o", "meaning": "to cut" },
    "suffix": { "part": "-ion", "meaning": "process" }
  },
   {
    "term": "Infracostal",
    "definition": "Pertaining to below the ribs",
    "prefix": { "part": "Infra-", "meaning": "below, inferior to" },
    "root": { "part": "Cost/o", "meaning": "rib" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Inguinal",
    "definition": "Pertaining to the groin",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Inguin/o", "meaning": "groin" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
   {
    "term": "Intercostal",
    "definition": "Pertaining to between the ribs",
    "prefix": { "part": "Inter-", "meaning": "between" },
    "root": { "part": "Cost/o", "meaning": "rib" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Intraocular",
    "definition": "Pertaining to within the eye",
    "prefix": { "part": "Intra-", "meaning": "in, within, into" },
    "root": { "part": "ocul/o", "meaning": "eye" },
    "suffix": { "part": "-ar", "meaning": "pertaining to" }
  },
   {
    "term": "Intravenous",
    "definition": "Pertaining to within a vein",
    "prefix": { "part": "Intra-", "meaning": "in, within, into" },
    "root": { "part": "ven/o", "meaning": "vein" },
    "suffix": { "part": "-ous", "meaning": "pertaining to" }
  },
  {
    "term": "Iridectomy",
    "definition": "Removal of a portion of the iris",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Irid/o", "meaning": "iris" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Iritis",
    "definition": "Inflammation of the iris of the eye",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ir/o", "meaning": "iris" }, // Or Irid/o
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Ischemia",
    "definition": "Condition of holding back blood from an organ or tissue",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Isch/o", "meaning": "to hold back" },
    "suffix": { "part": "-emia", "meaning": "blood condition" }
  },

  // === J Terms ===
  // (Very few terms starting with J fit the prefix/root/suffix model well)
  // Jejunitis (Implied) - Inflammation of the jejunum (Jejun/o + -itis)
  // Jejunostomy - New opening of the jejunum (Jejun/o + -stomy)

  // === K Terms ===
  {
    "term": "Keratitis",
    "definition": "Inflammation of the cornea of the eye",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Kerat/o", "meaning": "cornea, hard tissue" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
   {
    "term": "Keratoplasty",
    "definition": "Surgical repair of the cornea of the eye; corneal transplant",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Kerat/o", "meaning": "cornea, hard tissue" },
    "suffix": { "part": "-plasty", "meaning": "surgical repair" }
  },
  {
    "term": "Keratosis",
    "definition": "Excessive development of hard, keratinized tissue on the skin",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Kerat/o", "meaning": "cornea, hard tissue" },
    "suffix": { "part": "-osis", "meaning": "condition, usually abnormal" }
  },
  {
    "term": "Kyphosis",
    "definition": "Abnormal condition of outward curvature (convexity) of the thoracic spine; humpback",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Kyph/o", "meaning": "humpback, posterior curve in thoracic region" },
    "suffix": { "part": "-osis", "meaning": "condition, usually abnormal" }
  },
  {
    "term": "Labial",
    "definition": "Pertaining to the lip",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Labi/o", "meaning": "lip" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Labiodental",
    "definition": "Pertaining to lips and teeth",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Labi/o", "meaning": "lip" }, // Also Dent/i for tooth
    "suffix": { "part": "-dental", "meaning": "pertaining to teeth" } // Complex suffix
  },
  {
    "term": "Lacrimal",
    "definition": "Pertaining to tears",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Lacrim/o", "meaning": "tears" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Laminectomy",
    "definition": "Surgical removal of a portion of the vertebral arch (lamina)",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Lamin/o", "meaning": "lamina (part of vertebra)" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Laparoscope",
    "definition": "Instrument used to visually examine the abdomen",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Lapar/o", "meaning": "abdomen wall" },
    "suffix": { "part": "-scope", "meaning": "instrument for visual examination" }
  },
  {
    "term": "Laparoscopy",
    "definition": "Process of visually examining the abdomen using an endoscope",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Lapar/o", "meaning": "abdomen wall" },
    "suffix": { "part": "-scopy", "meaning": "process of visual examination" }
  },
  {
    "term": "Laparotomy",
    "definition": "Incision (large) of the abdomen",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Lapar/o", "meaning": "abdomen wall" },
    "suffix": { "part": "-tomy", "meaning": "incision, cutting into" }
  },
  {
    "term": "Laryngeal",
    "definition": "Pertaining to the larynx (voice box)",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Laryng/o", "meaning": "larynx (voice box)" },
    "suffix": { "part": "-eal", "meaning": "pertaining to" }
  },
  {
    "term": "Laryngectomy",
    "definition": "Removal of the larynx or voice box",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Laryng/o", "meaning": "larynx (voice box)" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Laryngitis",
    "definition": "Inflammation of the larynx (voice box)",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Laryng/o", "meaning": "larynx (voice box)" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Laryngoscopy",
    "definition": "Endoscopic visual examination of the larynx",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Laryng/o", "meaning": "larynx (voice box)" },
    "suffix": { "part": "-scopy", "meaning": "process of visual examination" }
  },
  {
    "term": "Laryngospasm",
    "definition": "Involuntary contraction of muscles surrounding the voice box",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Laryng/o", "meaning": "larynx (voice box)" },
    "suffix": { "part": "-spasm", "meaning": "sudden contraction of muscles" }
  },
  {
    "term": "Lateral",
    "definition": "Pertaining to the side",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Later/o", "meaning": "side" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Leiomyoma",
    "definition": "Benign tumor of smooth, involuntary muscle",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Leiomy/o", "meaning": "smooth muscle" }, // Also My/o for muscle
    "suffix": { "part": "-oma", "meaning": "tumor, mass" }
  },
  {
    "term": "Leiomyosarcoma",
    "definition": "Malignant tumor of smooth (involuntary) muscle",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Leiomy/o", "meaning": "smooth muscle" }, // Also Sarc/o for flesh
    "suffix": { "part": "-sarcoma", "meaning": "malignant tumor of connective tissue" }
  },
  {
    "term": "Leukapheresis",
    "definition": "Mechanical separation of white blood cells from the rest of the blood",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Leuk/o", "meaning": "white" },
    "suffix": { "part": "-apheresis", "meaning": "removal, carry away" } // Complex suffix
  },
  {
    "term": "Leukemia",
    "definition": "Blood condition of high numbers of malignant (cancerous) white blood cells",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Leuk/o", "meaning": "white" },
    "suffix": { "part": "-emia", "meaning": "blood condition" }
  },
  {
    "term": "Leukocyte",
    "definition": "White blood cell",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Leuk/o", "meaning": "white" },
    "suffix": { "part": "-cyte", "meaning": "cell" }
  },
  {
    "term": "Leukocytosis",
    "definition": "Condition of slight increase in normal white blood cells",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Leuk/o", "meaning": "white" }, // Root (cyt/o) implied
    "suffix": { "part": "-cytosis", "meaning": "abnormal condition of cells (increase)" }
  },
  {
    "term": "Leukopenia",
    "definition": "Deficiency of white blood cells",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Leuk/o", "meaning": "white" }, // Root (cyt/o) implied
    "suffix": { "part": "-penia", "meaning": "deficiency" }
  },
  {
    "term": "Leukoplakia",
    "definition": "White plaques on mucous membranes and surfaces of the body",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Leuk/o", "meaning": "white" },
    "suffix": { "part": "-plakia", "meaning": "plaque" }
  },
  {
    "term": "Leukorrhea",
    "definition": "White to yellow discharge from the vagina",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Leuk/o", "meaning": "white" },
    "suffix": { "part": "-rrhea", "meaning": "flow, discharge" }
  },
  {
    "term": "Lingual", // Implied from Sublingual
    "definition": "Pertaining to the tongue",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Lingu/o", "meaning": "tongue" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Lipase",
    "definition": "Pancreatic enzyme necessary to digest fats",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Lip/o", "meaning": "fat, lipid" },
    "suffix": { "part": "-ase", "meaning": "enzyme" }
  },
  {
    "term": "Lipoma",
    "definition": "Benign tumor of fatty tissue",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Lip/o", "meaning": "fat, lipid" },
    "suffix": { "part": "-oma", "meaning": "tumor, mass" }
  },
  {
    "term": "Liposuction",
    "definition": "Removal of adipose (fatty) tissue with a suction pump device",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Lip/o", "meaning": "fat, lipid" },
    "suffix": { "part": "-suction", "meaning": "process of aspirating/withdrawing" } // Descriptive suffix
  },
  {
    "term": "Lithogenesis",
    "definition": "Formation of stones (calculi)",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Lith/o", "meaning": "stone, calculus" },
    "suffix": { "part": "-genesis", "meaning": "producing, forming" }
  },
  {
    "term": "Lithotripsy",
    "definition": "Process of using high-energy sound waves to crush a stone",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Lith/o", "meaning": "stone, calculus" },
    "suffix": { "part": "-tripsy", "meaning": "to crush" }
  },
  {
    "term": "Lobectomy",
    "definition": "Removal of a lobe or section of a lung",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Lob/o", "meaning": "lobe" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Lordosis",
    "definition": "Anterior (forward) curvature of the lumbar spinal column",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Lord/o", "meaning": "curve, swayback (anterior curve)" },
    "suffix": { "part": "-osis", "meaning": "condition, usually abnormal" }
  },
  {
    "term": "Lumbar",
    "definition": "Pertaining to the lower back (waist)",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Lumb/o", "meaning": "lower back, loin" },
    "suffix": { "part": "-ar", "meaning": "pertaining to" }
  },
  {
    "term": "Lumbosacral",
    "definition": "Pertaining to the lumbar and sacral regions of the back",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Lumb/o", "meaning": "lower back" }, // Also Sacr/o for sacrum
    "suffix": { "part": "-sacral", "meaning": "pertaining to the sacrum" } // Complex suffix
  },
  {
    "term": "Lymphadenitis",
    "definition": "Inflammation of lymph nodes",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Lymphaden/o", "meaning": "lymph node (lymph gland)" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Lymphadenopathy",
    "definition": "Disease of lymph nodes",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Lymphaden/o", "meaning": "lymph node (lymph gland)" },
    "suffix": { "part": "-pathy", "meaning": "disease condition" }
  },
  {
    "term": "Lymphedema",
    "definition": "Abnormal collection of fluid in tissue spaces caused by obstruction of lymph vessels",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Lymph/o", "meaning": "lymph" },
    "suffix": { "part": "-edema", "meaning": "swelling" }
  },
  {
    "term": "Lymphocyte",
    "definition": "Type of white blood cell found in lymph nodes and blood",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Lymph/o", "meaning": "lymph" },
    "suffix": { "part": "-cyte", "meaning": "cell" }
  },
  {
    "term": "Lymphocytopenia",
    "definition": "Deficiency of lymphocytes",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Lymph/o", "meaning": "lymph" }, // Root (cyt/o) implied
    "suffix": { "part": "-cytopenia", "meaning": "deficiency of cells" }
  },
  {
    "term": "Lymphocytosis",
    "definition": "Increase in numbers of lymphocytes in the blood",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Lymph/o", "meaning": "lymph" }, // Root (cyt/o) implied
    "suffix": { "part": "-cytosis", "meaning": "abnormal condition of cells (increase)" }
  },
  {
    "term": "Lymphoma",
    "definition": "Malignant tumor of lymph nodes and lymphatic tissue",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Lymph/o", "meaning": "lymph" },
    "suffix": { "part": "-oma", "meaning": "tumor, mass" }
  },
  {
    "term": "Lymphopoiesis",
    "definition": "Formation of lymphocytes",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Lymph/o", "meaning": "lymph" },
    "suffix": { "part": "-poiesis", "meaning": "formation" }
  },

  // === M Terms ===
  {
    "term": "Macrocephaly",
    "definition": "Condition of a larger than normal head",
    "prefix": { "part": "Macro-", "meaning": "large" },
    "root": { "part": "Cephal/o", "meaning": "head" },
    "suffix": { "part": "-y", "meaning": "condition, process" }
  },
  {
    "term": "Macrocytosis",
    "definition": "Presence of large red blood cells in the blood",
    "prefix": { "part": "Macro-", "meaning": "large" },
    "root": { "part": "cyt/o", "meaning": "cell" },
    "suffix": { "part": "-osis", "meaning": "condition, usually abnormal (increase)" }
  },
  {
    "term": "Malignant",
    "definition": "Cancerous; harmful",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Malign", "meaning": "bad, harmful" }, // Non-standard root
    "suffix": { "part": "-ant", "meaning": "pertaining to" }
  },
   {
    "term": "Mammogram",
    "definition": "Record (x-ray) of the breast",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Mamm/o", "meaning": "breast" },
    "suffix": { "part": "-gram", "meaning": "record" }
  },
  {
    "term": "Mammography",
    "definition": "X-ray recording of the breast",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Mamm/o", "meaning": "breast" },
    "suffix": { "part": "-graphy", "meaning": "process of recording" }
  },
  {
    "term": "Mammoplasty",
    "definition": "Surgical repair of the breast",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Mamm/o", "meaning": "breast" },
    "suffix": { "part": "-plasty", "meaning": "surgical repair" }
  },
  {
    "term": "Mandibular",
    "definition": "Pertaining to the lower jaw bone",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Mandibul/o", "meaning": "mandible (lower jaw)" },
    "suffix": { "part": "-ar", "meaning": "pertaining to" }
  },
  {
    "term": "Mastectomy",
    "definition": "Removal (excision) of a breast",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Mast/o", "meaning": "breast" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Mastitis",
    "definition": "Inflammation of a breast",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Mast/o", "meaning": "breast" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Mastoiditis",
    "definition": "Inflammation and infection of the mastoid process",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Mastoid/o", "meaning": "mastoid process" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Maxillary",
    "definition": "Pertaining to the upper jaw bones",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Maxill/o", "meaning": "maxilla (upper jaw)" },
    "suffix": { "part": "-ary", "meaning": "pertaining to" }
  },
   {
    "term": "Medial",
    "definition": "Pertaining to the middle",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Medi/o", "meaning": "middle" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Mediastinoscopy",
    "definition": "Endoscopic visual examination of the mediastinum",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Mediastin/o", "meaning": "mediastinum" },
    "suffix": { "part": "-scopy", "meaning": "process of visual examination" }
  },
  {
    "term": "Medullary",
    "definition": "Pertaining to the medulla (inner region) of an organ",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Medull/o", "meaning": "medulla (inner section)" },
    "suffix": { "part": "-ary", "meaning": "pertaining to" }
  },
  {
    "term": "Melanocyte",
    "definition": "Cell in the basal layer of the epidermis that produces melanin",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Melan/o", "meaning": "black, dark" },
    "suffix": { "part": "-cyte", "meaning": "cell" }
  },
  {
    "term": "Melanoma",
    "definition": "Cancerous skin growth composed of melanocytes",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Melan/o", "meaning": "black, dark" },
    "suffix": { "part": "-oma", "meaning": "tumor, mass" }
  },
  {
    "term": "Meningeal",
    "definition": "Pertaining to the meninges",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Mening/o", "meaning": "meninges (membranes)" }, // Or Meninge/o
    "suffix": { "part": "-eal", "meaning": "pertaining to" }
  },
  {
    "term": "Meningioma",
    "definition": "Tumor (benign) of the meninges",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Meningi/o", "meaning": "meninges" },
    "suffix": { "part": "-oma", "meaning": "tumor, mass" }
  },
  {
    "term": "Meningitis",
    "definition": "Inflammation of the meninges",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Mening/o", "meaning": "meninges" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
   {
    "term": "Meningocele",
    "definition": "Hernia of the meninges through a defect or space between vertebrae",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Mening/o", "meaning": "meninges" },
    "suffix": { "part": "-cele", "meaning": "hernia" }
  },
  {
    "term": "Menometrorrhagia",
    "definition": "Excessive uterine bleeding during menstruation and also between menstrual periods",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Men/o", "meaning": "menstruation" }, // Also Metr/o for uterus
    "suffix": { "part": "-metrorrhagia", "meaning": "bursting forth of blood from uterus between periods" } // Complex suffix
  },
  {
    "term": "Menorrhagia",
    "definition": "Abnormally heavy or long menstrual periods",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Men/o", "meaning": "menstruation" },
    "suffix": { "part": "-rrhagia", "meaning": "bursting forth (of blood)" }
  },
  {
    "term": "Menorrhea",
    "definition": "Menstruation; monthly discharge of blood from the lining of the uterus",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Men/o", "meaning": "menstruation" },
    "suffix": { "part": "-rrhea", "meaning": "flow, discharge" }
  },
   {
    "term": "Mental",
    "definition": "Pertaining to the mind",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ment/o", "meaning": "mind" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
   {
    "term": "Metacarpals",
    "definition": "Hand bones",
    "prefix": { "part": "Meta-", "meaning": "beyond, change" },
    "root": { "part": "Carp/o", "meaning": "wrist bones (carpals)" },
    "suffix": { "part": "-als", "meaning": "pertaining to (plural)" }
  },
  {
    "term": "Metacarpectomy",
    "definition": "Removal of hand bones",
    "prefix": { "part": "Meta-", "meaning": "beyond, change" },
    "root": { "part": "Carp/o", "meaning": "wrist bones (carpals)" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Metastasis",
    "definition": "Spread of a malignant tumor beyond its original location to a distant site",
    "prefix": { "part": "Meta-", "meaning": "beyond, change" },
    "root": { "part": "-stasis", "meaning": "stopping, controlling, placement" }, // Suffix used like root here
    "suffix": { "part": null, "meaning": null }
  },
   {
    "term": "Metrorrhagia",
    "definition": "Bleeding at irregular intervals; between expected menstrual periods",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Metr/o", "meaning": "uterus" },
    "suffix": { "part": "-rrhagia", "meaning": "bursting forth (of blood)" }
  },
  {
    "term": "Microcephaly",
    "definition": "Condition of smaller than normal head",
    "prefix": { "part": "Micro-", "meaning": "small" },
    "root": { "part": "Cephal/o", "meaning": "head" },
    "suffix": { "part": "-y", "meaning": "condition, process" }
  },
  {
    "term": "Microcytosis",
    "definition": "Increased numbers of smaller than normal red blood cells",
    "prefix": { "part": "Micro-", "meaning": "small" },
    "root": { "part": "cyt/o", "meaning": "cell" },
    "suffix": { "part": "-osis", "meaning": "condition, usually abnormal (increase)" }
  },
  {
    "term": "Microscope",
    "definition": "Instrument to view small objects",
    "prefix": { "part": "Micro-", "meaning": "small" },
    "root": { "part": null, "meaning": null },
    "suffix": { "part": "-scope", "meaning": "instrument for visual examination" }
  },
  {
    "term": "Miosis",
    "definition": "Contraction of the pupil of the eye",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Mi/o", "meaning": "smaller, less" },
    "suffix": { "part": "-osis", "meaning": "condition, usually abnormal" }
  },
   {
    "term": "Monocyte",
    "definition": "White blood cell with one large nucleus",
    "prefix": { "part": "Mono-", "meaning": "one, single" },
    "root": { "part": "cyt/e", "meaning": "cell" }, // Root used like suffix
    "suffix": { "part": null, "meaning": null }
  },
  {
    "term": "Mononuclear",
    "definition": "Pertaining to a white blood cell with a single round nucleus",
    "prefix": { "part": "Mono-", "meaning": "one, single" },
    "root": { "part": "nucle/o", "meaning": "nucleus" },
    "suffix": { "part": "-ar", "meaning": "pertaining to" }
  },
   {
    "term": "Morphology",
    "definition": "Study of the shape or form of cells",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Morph/o", "meaning": "shape, form" },
    "suffix": { "part": "-logy", "meaning": "study of" }
  },
  {
    "term": "Multigravida",
    "definition": "Woman who has been pregnant more than once",
    "prefix": { "part": "Multi-", "meaning": "many" },
    "root": { "part": "gravida", "meaning": "pregnant woman" }, // Root/suffix combo
    "suffix": { "part": null, "meaning": null }
  },
  {
    "term": "Myalgia",
    "definition": "Muscle pain",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "My/o", "meaning": "muscle" },
    "suffix": { "part": "-algia", "meaning": "pain" }
  },
  {
    "term": "Mycosis",
    "definition": "Disease caused by a fungus",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Myc/o", "meaning": "fungus" },
    "suffix": { "part": "-osis", "meaning": "condition, usually abnormal" }
  },
  {
    "term": "Mydriasis",
    "definition": "Widening of the pupil of the eye",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Mydr/o", "meaning": "widen, enlarge" }, // Less common root
    "suffix": { "part": "-iasis", "meaning": "abnormal condition" }
  },
   {
    "term": "Myelitis",
    "definition": "Inflammation of the spinal cord",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Myel/o", "meaning": "spinal cord, bone marrow" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Myelodysplasia",
    "definition": "Inability of the bone marrow to produce normal blood cells", // Definition simplified
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Myel/o", "meaning": "spinal cord, bone marrow" },
    "suffix": { "part": "-dysplasia", "meaning": "abnormal development" } // Complex suffix
  },
  {
    "term": "Myelography",
    "definition": "X-ray image of the spinal cord",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Myel/o", "meaning": "spinal cord, bone marrow" },
    "suffix": { "part": "-graphy", "meaning": "process of recording" }
  },
   {
    "term": "Myeloma",
    "definition": "Malignant tumor of bone marrow",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Myel/o", "meaning": "spinal cord, bone marrow" },
    "suffix": { "part": "-oma", "meaning": "tumor, mass" }
  },
  {
    "term": "Myelomeningocele",
    "definition": "Congenital hernia of the spinal cord and meninges",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Myel/o", "meaning": "spinal cord" }, // Also Mening/o for meninges
    "suffix": { "part": "-meningocele", "meaning": "hernia of the meninges" } // Complex suffix
  },
  {
    "term": "Myelopathy",
    "definition": "Disease of the spinal cord",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Myel/o", "meaning": "spinal cord, bone marrow" },
    "suffix": { "part": "-pathy", "meaning": "disease condition" }
  },
  {
    "term": "Myelopoiesis",
    "definition": "Formation of bone marrow",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Myel/o", "meaning": "spinal cord, bone marrow" },
    "suffix": { "part": "-poiesis", "meaning": "formation" }
  },
  {
    "term": "Myocardial",
    "definition": "Pertaining to the heart muscle",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "My/o", "meaning": "muscle" }, // Also Cardi/o for heart
    "suffix": { "part": "-cardial", "meaning": "pertaining to the heart" } // Complex suffix
  },
  {
    "term": "Myoma",
    "definition": "Tumor (benign) of muscle",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "My/o", "meaning": "muscle" },
    "suffix": { "part": "-oma", "meaning": "tumor, mass" }
  },
  {
    "term": "Myomectomy",
    "definition": "Removal of muscle tumors (fibroids) from the uterus",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Myom/o", "meaning": "muscle tumor" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Myopathy",
    "definition": "Disease of muscles",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "My/o", "meaning": "muscle" },
    "suffix": { "part": "-pathy", "meaning": "disease condition" }
  },
   {
    "term": "Myopia",
    "definition": "Nearsightedness",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "My/o", "meaning": "to shut" }, // Root relation indirect
    "suffix": { "part": "-opia", "meaning": "vision condition" }
  },
  {
    "term": "Myosarcoma",
    "definition": "Tumor (malignant) of muscle tissue",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "My/o", "meaning": "muscle" }, // Also Sarc/o for flesh
    "suffix": { "part": "-sarcoma", "meaning": "malignant tumor of connective tissue" }
  },
  {
    "term": "Myositis",
    "definition": "Inflammation of muscles",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Myos/o", "meaning": "muscle" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
   {
    "term": "Myringitis",
    "definition": "Inflammation of the eardrum",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Myring/o", "meaning": "eardrum (tympanic membrane)" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Myringotomy",
    "definition": "Incision of the eardrum",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Myring/o", "meaning": "eardrum (tympanic membrane)" },
    "suffix": { "part": "-tomy", "meaning": "incision, cutting into" }
  },
   {
    "term": "Myxoma",
    "definition": "Benign tumor of connective tissue in the heart muscle",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Myx/o", "meaning": "mucus" },
    "suffix": { "part": "-oma", "meaning": "tumor, mass" }
  },

  // === N Terms ===
  {
    "term": "Narcolepsy",
    "definition": "Sudden seizures of sleep",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Narc/o", "meaning": "numbness, stupor, sleep" },
    "suffix": { "part": "-lepsy", "meaning": "seizure" }
  },
  {
    "term": "Nasogastric", // From Nasogastric intubation
    "definition": "Pertaining to the nose and stomach",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Nas/o", "meaning": "nose" }, // Also Gastr/o for stomach
    "suffix": { "part": "-gastric", "meaning": "pertaining to the stomach" } // Complex suffix
  },
  {
    "term": "Necrosis",
    "definition": "Condition of death of cells",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Necr/o", "meaning": "death (of cells or whole body)" },
    "suffix": { "part": "-osis", "meaning": "condition, usually abnormal" }
  },
  {
    "term": "Neonatal",
    "definition": "Pertaining to a new birth",
    "prefix": { "part": "Neo-", "meaning": "new" },
    "root": { "part": "nat/o", "meaning": "birth" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Neonatology",
    "definition": "Study of the medical care of the newborn (neonate)",
    "prefix": { "part": "Neo-", "meaning": "new" },
    "root": { "part": "nat/o", "meaning": "birth" },
    "suffix": { "part": "-logy", "meaning": "study of" }
  },
  {
    "term": "Neoplasm",
    "definition": "New growth",
    "prefix": { "part": "Neo-", "meaning": "new" },
    "root": { "part": null, "meaning": null },
    "suffix": { "part": "-plasm", "meaning": "formation, structure" }
  },
  {
    "term": "Nephrectomy",
    "definition": "Removal of a kidney",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Nephr/o", "meaning": "kidney" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Nephritis",
    "definition": "Inflammation of a kidney",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Nephr/o", "meaning": "kidney" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Nephrolithiasis",
    "definition": "Abnormal condition of kidney stones",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Nephr/o", "meaning": "kidney" }, // Also lith/o for stone
    "suffix": { "part": "-lithiasis", "meaning": "condition of stones" }
  },
  {
    "term": "Nephrolithotomy",
    "definition": "Incision of the kidney to remove a stone",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Nephr/o", "meaning": "kidney" }, // Also lith/o for stone
    "suffix": { "part": "-lithotomy", "meaning": "incision to remove stones" } // Complex suffix
  },
  {
    "term": "Nephrology",
    "definition": "Study of the kidneys and kidney disease",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Nephr/o", "meaning": "kidney" },
    "suffix": { "part": "-logy", "meaning": "study of" }
  },
  {
    "term": "Nephropathy",
    "definition": "Disease of the kidneys",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Nephr/o", "meaning": "kidney" },
    "suffix": { "part": "-pathy", "meaning": "disease condition" }
  },
  {
    "term": "Nephroptosis",
    "definition": "Prolapse of a kidney",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Nephr/o", "meaning": "kidney" },
    "suffix": { "part": "-ptosis", "meaning": "drooping, falling, prolapse" }
  },
  {
    "term": "Nephrosis",
    "definition": "Abnormal condition of the kidney",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Nephr/o", "meaning": "kidney" },
    "suffix": { "part": "-osis", "meaning": "condition, usually abnormal" }
  },
  {
    "term": "Nephrostomy",
    "definition": "Opening of the kidney to the outside of the body",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Nephr/o", "meaning": "kidney" },
    "suffix": { "part": "-stomy", "meaning": "new opening" }
  },
  {
    "term": "Neural",
    "definition": "Pertaining to nerves",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Neur/o", "meaning": "nerve" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Neuralgia",
    "definition": "Nerve pain",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Neur/o", "meaning": "nerve" },
    "suffix": { "part": "-algia", "meaning": "pain" }
  },
  {
    "term": "Neuritis", // Implied term
    "definition": "Inflammation of a nerve",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Neur/o", "meaning": "nerve" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Neuroblastoma",
    "definition": "Malignant childhood tumor originating in cells of the nervous system",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Neur/o", "meaning": "nerve" },
    "suffix": { "part": "-blastoma", "meaning": "immature tumor" } // Complex suffix
  },
  {
    "term": "Neurology",
    "definition": "Study of nerves and nerve disorders",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Neur/o", "meaning": "nerve" },
    "suffix": { "part": "-logy", "meaning": "study of" }
  },
  {
    "term": "Neuropathy",
    "definition": "Disease of nerves",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Neur/o", "meaning": "nerve" },
    "suffix": { "part": "-pathy", "meaning": "disease condition" }
  },
  {
    "term": "Neutropenia",
    "definition": "Deficiency of neutrophils",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Neutr/o", "meaning": "neutral (neither base nor acid)" },
    "suffix": { "part": "-penia", "meaning": "deficiency" }
  },
  {
    "term": "Neutrophilia",
    "definition": "Increased numbers of neutrophils",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Neutr/o", "meaning": "neutral" },
    "suffix": { "part": "-philia", "meaning": "attraction for (increase in cells)" }
  },
  {
    "term": "Nocturia",
    "definition": "Urinary frequency at night",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Noct/i", "meaning": "night" },
    "suffix": { "part": "-uria", "meaning": "urination, urine condition" }
  },
  {
    "term": "Nulligravida",
    "definition": "Woman who has never been pregnant",
    "prefix": { "part": "Nulli-", "meaning": "none" },
    "root": { "part": "gravida", "meaning": "pregnant woman" }, // Root/suffix combo
    "suffix": { "part": null, "meaning": null }
  },
  {
    "term": "Nullipara",
    "definition": "Woman who has never given birth to an infant",
    "prefix": { "part": "Nulli-", "meaning": "none" },
    "root": { "part": "para", "meaning": "to bear, bring forth (live births)" }, // Root/suffix combo
    "suffix": { "part": null, "meaning": null }
  },
  {
    "term": "Nyctalopia",
    "definition": "Night blindness",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Nyctal/o", "meaning": "night" },
    "suffix": { "part": "-opia", "meaning": "vision condition" }
  },

  // === O Terms ===
   {
    "term": "Oligomenorrhea",
    "definition": "Scanty menstrual flow",
    "prefix": { "part": "Oligo-", "meaning": "scanty, few" },
    "root": { "part": "Men/o", "meaning": "menstruation" },
    "suffix": { "part": "-rrhea", "meaning": "flow, discharge" }
  },
  {
    "term": "Oligospermia",
    "definition": "Scanty sperm count",
    "prefix": { "part": "Oligo-", "meaning": "scanty, few" },
    "root": { "part": "sperm/o", "meaning": "spermatozoa, semen" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
  {
    "term": "Oliguria",
    "definition": "Scanty urination",
    "prefix": { "part": "Oligo-", "meaning": "scanty, few" },
    "root": { "part": "ur/o", "meaning": "urine, urinary tract" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
  {
    "term": "Oncology",
    "definition": "Study of tumors (malignant tumors)",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Onc/o", "meaning": "tumor" },
    "suffix": { "part": "-logy", "meaning": "study of" }
  },
  {
    "term": "Onycholysis",
    "definition": "Loosening of the nail plate with separation from the nail bed",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Onych/o", "meaning": "nail" },
    "suffix": { "part": "-lysis", "meaning": "breakdown, destruction, separation" }
  },
  {
    "term": "Onychomycosis",
    "definition": "Fungal infection of a nail",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Onych/o", "meaning": "nail" }, // Also Myc/o for fungus
    "suffix": { "part": "-mycosis", "meaning": "abnormal condition of fungus" } // Complex suffix
  },
  {
    "term": "Oogenesis",
    "definition": "Formation of ova (egg cells)",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "O/o", "meaning": "egg" },
    "suffix": { "part": "-genesis", "meaning": "producing, forming" }
  },
  {
    "term": "Oophorectomy",
    "definition": "Removal of an ovary",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Oophor/o", "meaning": "ovary" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Oophoritis",
    "definition": "Inflammation of an ovary",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Oophor/o", "meaning": "ovary" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Ophthalmic",
    "definition": "Pertaining to the eye",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ophthalm/o", "meaning": "eye" },
    "suffix": { "part": "-ic", "meaning": "pertaining to" }
  },
  {
    "term": "Ophthalmology",
    "definition": "Study of the eye and eye disorders",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ophthalm/o", "meaning": "eye" },
    "suffix": { "part": "-logy", "meaning": "study of" }
  },
  {
    "term": "Ophthalmoplegia",
    "definition": "Paralysis of muscles that move the eyeball",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ophthalm/o", "meaning": "eye" },
    "suffix": { "part": "-plegia", "meaning": "paralysis" }
  },
  {
    "term": "Ophthalmoscope",
    "definition": "Instrument to visually examine the eyes",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ophthalm/o", "meaning": "eye" },
    "suffix": { "part": "-scope", "meaning": "instrument for visual examination" }
  },
  {
    "term": "Ophthalmoscopy",
    "definition": "Visual examination of the interior of the eye",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ophthalm/o", "meaning": "eye" },
    "suffix": { "part": "-scopy", "meaning": "process of visual examination" }
  },
  {
    "term": "Orchiectomy",
    "definition": "Removal (excision) of a testis",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Orchi/o", "meaning": "testis, testicle" }, // Also Orchid/o
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Orchiopexy",
    "definition": "Surgical fixation of an undescended testis into the scrotum",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Orchi/o", "meaning": "testis, testicle" }, // Also Orchid/o
    "suffix": { "part": "-pexy", "meaning": "fixation, to put in place" }
  },
  {
    "term": "Orchitis",
    "definition": "Inflammation of a testis",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Orch/o", "meaning": "testis, testicle" }, // Or Orchi/o, Orchid/o
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Orthopedics",
    "definition": "Surgical specialty devoted to correcting deformities and diseases in bones", // Definition simplified
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Orth/o", "meaning": "straight" }, // Also Ped/o for child
    "suffix": { "part": "-ics", "meaning": "pertaining to (field of study)" }
  },
  {
    "term": "Orthopnea",
    "definition": "Abnormal condition in which breathing is only comfortable when upright",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Orth/o", "meaning": "straight, upright" },
    "suffix": { "part": "-pnea", "meaning": "breathing" }
  },
  {
    "term": "Ossification",
    "definition": "Process of bone formation",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Oss/i", "meaning": "bone" }, // Also Oste/o
    "suffix": { "part": "-fication", "meaning": "process of making" }
  },
  {
    "term": "Osteitis",
    "definition": "Inflammation of bone",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Oste/o", "meaning": "bone" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Osteoarthritis",
    "definition": "Inflammation of bones and joints",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Oste/o", "meaning": "bone" }, // Also Arthr/o for joint
    "suffix": { "part": "-arthritis", "meaning": "inflammation of joint" } // Complex suffix
  },
   {
    "term": "Osteoblast",
    "definition": "Bone cell that helps form bony tissue",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Oste/o", "meaning": "bone" },
    "suffix": { "part": "-blast", "meaning": "immature cell, embryonic" }
  },
  {
    "term": "Osteoclast",
    "definition": "Bone cell that absorbs and removes unwanted bony tissue",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Oste/o", "meaning": "bone" },
    "suffix": { "part": "-clast", "meaning": "to break" }
  },
  {
    "term": "Osteodystrophy",
    "definition": "Abnormal development of bone",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Oste/o", "meaning": "bone" },
    "suffix": { "part": "-dystrophy", "meaning": "abnormal development" } // Complex suffix
  },
   {
    "term": "Osteogenic",
    "definition": "Pertaining to produced in or by bone",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Oste/o", "meaning": "bone" },
    "suffix": { "part": "-genic", "meaning": "produced by or in" }
  },
  {
    "term": "Osteomalacia",
    "definition": "Softening of bones",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Oste/o", "meaning": "bone" },
    "suffix": { "part": "-malacia", "meaning": "softening" }
  },
  {
    "term": "Osteomyelitis",
    "definition": "Inflammation of bone and bone marrow secondary to infection",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Oste/o", "meaning": "bone" }, // Also Myel/o for bone marrow
    "suffix": { "part": "-myelitis", "meaning": "inflammation of bone marrow" } // Complex suffix
  },
  {
    "term": "Osteopenia",
    "definition": "Deficiency of bone",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Oste/o", "meaning": "bone" },
    "suffix": { "part": "-penia", "meaning": "deficiency" }
  },
  {
    "term": "Osteoporosis",
    "definition": "Decrease in bone density (mass); thinning and weakening of bone",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Oste/o", "meaning": "bone" }, // Also Por/o for pore, passageway
    "suffix": { "part": "-porosis", "meaning": "condition of pores/spaces" } // Complex suffix
  },
  {
    "term": "Osteosarcoma",
    "definition": "Malignant tumor of bone",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Oste/o", "meaning": "bone" }, // Also Sarc/o for flesh
    "suffix": { "part": "-sarcoma", "meaning": "malignant tumor of connective tissue" }
  },
  {
    "term": "Osteotomy",
    "definition": "Incision of a bone",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Oste/o", "meaning": "bone" },
    "suffix": { "part": "-tomy", "meaning": "incision, cutting into" }
  },
  {
    "term": "Otalgia",
    "definition": "Ear pain",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ot/o", "meaning": "ear" },
    "suffix": { "part": "-algia", "meaning": "pain" }
  },
  {
    "term": "Otic",
    "definition": "Pertaining to the ear",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ot/o", "meaning": "ear" },
    "suffix": { "part": "-ic", "meaning": "pertaining to" }
  },
  {
    "term": "Otitis", // From Otitis Media
    "definition": "Inflammation of the ear",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ot/o", "meaning": "ear" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Otomycosis",
    "definition": "Fungal infection of the ear",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ot/o", "meaning": "ear" }, // Also Myc/o for fungus
    "suffix": { "part": "-mycosis", "meaning": "abnormal condition of fungus" }
  },
  {
    "term": "Otopyorrhea",
    "definition": "Discharge of pus from the ear",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ot/o", "meaning": "ear" }, // Also Py/o for pus
    "suffix": { "part": "-pyorrhea", "meaning": "discharge of pus" } // Complex suffix
  },
  {
    "term": "Otosclerosis",
    "definition": "Hardening of the bony tissue of the middle ear",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ot/o", "meaning": "ear" }, // Also Scler/o for hardening
    "suffix": { "part": "-sclerosis", "meaning": "hardening" }
  },
  {
    "term": "Otoscopy",
    "definition": "Visual examination of the ear canal using an otoscope",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ot/o", "meaning": "ear" },
    "suffix": { "part": "-scopy", "meaning": "process of visual examination" }
  },
  {
    "term": "Ovarian",
    "definition": "Pertaining to an ovary",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ovari/o", "meaning": "ovary" },
    "suffix": { "part": "-an", "meaning": "pertaining to" }
  },
  {
    "term": "Oxytocia",
    "definition": "Rapid labor and childbirth",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Oxy-", "meaning": "swift, sharp, acid" }, // Prefix used like root
    "suffix": { "part": "-tocia", "meaning": "labor, birth" }
  },

  // === P Terms ===
  {
    "term": "Pancytopenia",
    "definition": "Deficiency of all (blood) cells",
    "prefix": { "part": "Pan-", "meaning": "all" },
    "root": { "part": "cyt/o", "meaning": "cell" },
    "suffix": { "part": "-penia", "meaning": "deficiency" }
  },
  {
    "term": "Panhypopituitarism",
    "definition": "Deficiency of all pituitary gland hormones",
    "prefix": { "part": "Pan-", "meaning": "all" },
    "root": { "part": "hypopituitar/o", "meaning": "deficient pituitary gland" }, // Complex root
    "suffix": { "part": "-ism", "meaning": "process, condition" }
  },
   {
    "term": "Paracentesis",
    "definition": "Puncture to remove fluid from the abdomen; abdominocentesis", // Definition indicates synonym
    "prefix": { "part": "Para-", "meaning": "near, beside, abnormal, apart from" },
    "root": { "part": null, "meaning": null },
    "suffix": { "part": "-centesis", "meaning": "surgical puncture to remove fluid" }
  },
   {
    "term": "Paralysis",
    "definition": "Loss of sensation or motion", // Definition simplified
    "prefix": { "part": "Para-", "meaning": "abnormal" },
    "root": { "part": null, "meaning": null },
    "suffix": { "part": "-lysis", "meaning": "breakdown, destruction (of nerve function)" } // Suffix connection indirect
  },
   {
    "term": "Parathyroidectomy",
    "definition": "Removal of parathyroid glands",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Parathyroid/o", "meaning": "parathyroid gland" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Paresis",
    "definition": "Slight paralysis",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": null, "meaning": null },
    "suffix": { "part": "-paresis", "meaning": "weakness, slight paralysis" }
  },
  {
    "term": "Paresthesia",
    "definition": "Abnormal nervous sensation",
    "prefix": { "part": "Par-", "meaning": "abnormal" }, // Shortened Para-
    "root": { "part": "esthesi/o", "meaning": "feeling, nervous sensation" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
  {
    "term": "Parturition",
    "definition": "Act of giving birth",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Parturit", "meaning": "childbirth" }, // Non-standard root
    "suffix": { "part": "-ion", "meaning": "process" }
  },
  {
    "term": "Pathogenesis",
    "definition": "Development of disease",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Path/o", "meaning": "disease" },
    "suffix": { "part": "-genesis", "meaning": "producing, forming" }
  },
  {
    "term": "Pathogenic",
    "definition": "Pertaining to producing disease",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Path/o", "meaning": "disease" },
    "suffix": { "part": "-genic", "meaning": "produced by or in" }
  },
  {
    "term": "Pathologic",
    "definition": "Pertaining to the study of disease",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Path/o", "meaning": "disease" },
    "suffix": { "part": "-logic", "meaning": "pertaining to the study of" } // Complex suffix
  },
  {
    "term": "Pathology",
    "definition": "Study of disease",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Path/o", "meaning": "disease" },
    "suffix": { "part": "-logy", "meaning": "study of" }
  },
  {
    "term": "Pediatric",
    "definition": "Pertaining to treatment of children",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ped/o", "meaning": "child" }, // Also iatr/o for treatment
    "suffix": { "part": "-iatric", "meaning": "pertaining to treatment" } // Complex suffix
  },
  {
    "term": "Pelvic",
    "definition": "Pertaining to the pelvis",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Pelv/i", "meaning": "pelvis, hip region" },
    "suffix": { "part": "-ic", "meaning": "pertaining to" }
  },
  {
    "term": "Penoscrotal",
    "definition": "Pertaining to the penis and scrotum",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Pen/o", "meaning": "penis" }, // Also Scrot/o for scrotum
    "suffix": { "part": "-scrotal", "meaning": "pertaining to the scrotum" } // Complex suffix
  },
  {
    "term": "Percutaneous",
    "definition": "Pertaining to through the skin",
    "prefix": { "part": "Per-", "meaning": "through" },
    "root": { "part": "cutane/o", "meaning": "skin" },
    "suffix": { "part": "-ous", "meaning": "pertaining to" }
  },
  {
    "term": "Perianal",
    "definition": "Pertaining to surrounding the anus",
    "prefix": { "part": "Peri-", "meaning": "surrounding" },
    "root": { "part": "an/o", "meaning": "anus" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Pericarditis",
    "definition": "Inflammation of the pericardium",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Pericardi/o", "meaning": "pericardium" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Perineal", // Implied from Perineum, Perineorrhaphy
    "definition": "Pertaining to the perineum",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Perine/o", "meaning": "perineum" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Perineorrhaphy",
    "definition": "Suture of the perineum",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Perine/o", "meaning": "perineum" },
    "suffix": { "part": "-rrhaphy", "meaning": "suture" }
  },
  {
    "term": "Periodontal",
    "definition": "Pertaining to surrounding the teeth",
    "prefix": { "part": "Peri-", "meaning": "surrounding" },
    "root": { "part": "odont/o", "meaning": "tooth" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
   {
    "term": "Periosteum",
    "definition": "Membrane surrounding bones",
    "prefix": { "part": "Peri-", "meaning": "surrounding" },
    "root": { "part": "oste/o", "meaning": "bone" },
    "suffix": { "part": "-um", "meaning": "structure, tissue, thing" }
  },
  {
    "term": "Peritoneal",
    "definition": "Pertaining to the peritoneum",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Peritone/o", "meaning": "peritoneum" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Peritonitis",
    "definition": "Inflammation of the peritoneum",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Periton/o", "meaning": "peritoneum" }, // Shortened root
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
   {
    "term": "Phagocyte",
    "definition": "Cell that engulfs another cell or foreign organism and destroys it",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Phag/o", "meaning": "to eat, swallow, engulf" },
    "suffix": { "part": "-cyte", "meaning": "cell" }
  },
   {
    "term": "Phalangeal",
    "definition": "Pertaining to finger and toe bones",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Phalang/o", "meaning": "phalanges (finger/toe bones)" },
    "suffix": { "part": "-eal", "meaning": "pertaining to" }
  },
  {
    "term": "Pharmacology",
    "definition": "Study of the properties, uses, and actions of drugs",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Pharmac/o", "meaning": "drug" },
    "suffix": { "part": "-logy", "meaning": "study of" }
  },
  {
    "term": "Pharyngeal",
    "definition": "Pertaining to the pharynx (throat)",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Pharyng/o", "meaning": "pharynx (throat)" },
    "suffix": { "part": "-eal", "meaning": "pertaining to" }
  },
  {
    "term": "Phlebitis", // Implied from Thrombophlebitis
    "definition": "Inflammation of a vein",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Phleb/o", "meaning": "vein" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Phlebotomy",
    "definition": "Incision of a vein (for the removal of blood)",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Phleb/o", "meaning": "vein" },
    "suffix": { "part": "-tomy", "meaning": "incision, cutting into" }
  },
  {
    "term": "Phobia",
    "definition": "Irrational fear of an object or a situation",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Phob/o", "meaning": "fear" }, // Root used as suffix here conceptually
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
  {
    "term": "Photophobia",
    "definition": "Sensitivity to light",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Phot/o", "meaning": "light" },
    "suffix": { "part": "-phobia", "meaning": "fear (aversive sensitivity)" }
  },
   {
    "term": "Plastic", // Implied from -plasty suffix
    "definition": "Pertaining to formation or repair",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Plast/o", "meaning": "formation, repair" },
    "suffix": { "part": "-ic", "meaning": "pertaining to" }
  },
   {
    "term": "Pleurisy",
    "definition": "Inflammation of the pleura; pleuritis",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Pleur/o", "meaning": "pleura" },
    "suffix": { "part": "-isy", "meaning": "state of, condition (inflammation)" } // Alt suffix for -itis
  },
  {
    "term": "Pleurodynia",
    "definition": "Pain associated with the pleura",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Pleur/o", "meaning": "pleura" },
    "suffix": { "part": "-dynia", "meaning": "pain" }
  },
  {
    "term": "Pneumonectomy",
    "definition": "Removal of a lung",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Pneumon/o", "meaning": "lung, air" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Pneumonia",
    "definition": "Acute inflammation and infection of the alveoli of the lungs",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Pneumon/o", "meaning": "lung, air" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
  {
    "term": "Pneumonitis",
    "definition": "Inflammation of the lungs",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Pneumon/o", "meaning": "lung, air" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Pneumothorax",
    "definition": "Collection of air or gas in the pleural cavity",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Pneum/o", "meaning": "air, lung" }, // Also Thorac/o for chest
    "suffix": { "part": "-thorax", "meaning": "chest, pleural cavity" }
  },
  {
    "term": "Poliomyelitis",
    "definition": "Inflammation of the gray matter of the spinal cord",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Poli/o", "meaning": "gray matter" }, // Also Myel/o for spinal cord
    "suffix": { "part": "-myelitis", "meaning": "inflammation of the spinal cord" } // Complex suffix
  },
  {
    "term": "Polyarthritis",
    "definition": "Inflammation of many joints",
    "prefix": { "part": "Poly-", "meaning": "many, much" },
    "root": { "part": "Arthr/o", "meaning": "joint" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
   {
    "term": "Polydipsia",
    "definition": "Excessive thirst",
    "prefix": { "part": "Poly-", "meaning": "many, much" },
    "root": { "part": "dips/o", "meaning": "thirst" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
  {
    "term": "Polymyalgia",
    "definition": "Pain of many (several) muscles",
    "prefix": { "part": "Poly-", "meaning": "many, much" },
    "root": { "part": "My/o", "meaning": "muscle" },
    "suffix": { "part": "-algia", "meaning": "pain" }
  },
  {
    "term": "Polymyositis",
    "definition": "Inflammation of many muscles",
    "prefix": { "part": "Poly-", "meaning": "many, much" },
    "root": { "part": "Myos/o", "meaning": "muscle" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Polyneuritis",
    "definition": "Inflammation of many nerves",
    "prefix": { "part": "Poly-", "meaning": "many, much" },
    "root": { "part": "Neur/o", "meaning": "nerve" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Polyphagia",
    "definition": "Excessive eating",
    "prefix": { "part": "Poly-", "meaning": "many, much" },
    "root": { "part": "phag/o", "meaning": "eating, swallowing" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
  {
    "term": "Polyuria",
    "definition": "Excessive urination",
    "prefix": { "part": "Poly-", "meaning": "many, much" },
    "root": { "part": "ur/o", "meaning": "urine, urinary tract" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
  {
    "term": "Posterior",
    "definition": "Back or dorsal surface of the body or structure",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Poster/o", "meaning": "back (of body), behind" },
    "suffix": { "part": "-ior", "meaning": "pertaining to" }
  },
   {
    "term": "Postpartum",
    "definition": "After birth",
    "prefix": { "part": "Post-", "meaning": "after, behind" },
    "root": { "part": "part/o", "meaning": "birth, labor" },
    "suffix": { "part": "-um", "meaning": "structure, period of time" }
  },
   {
    "term": "Precancerous",
    "definition": "Pertaining to occurring before a malignant condition",
    "prefix": { "part": "Pre-", "meaning": "before, in front of" },
    "root": { "part": "cancer/o", "meaning": "cancer" },
    "suffix": { "part": "-ous", "meaning": "pertaining to" }
  },
   {
    "term": "Prenatal",
    "definition": "Pertaining to before birth",
    "prefix": { "part": "Pre-", "meaning": "before, in front of" },
    "root": { "part": "nat/o", "meaning": "birth" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Primigravida",
    "definition": "Woman during her first pregnancy",
    "prefix": { "part": "Primi-", "meaning": "first" },
    "root": { "part": "gravida", "meaning": "pregnant woman" }, // Root/suffix combo
    "suffix": { "part": null, "meaning": null }
  },
   {
    "term": "Proctology", // Implied from Proctologist
    "definition": "Study of the anus and rectum",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Proct/o", "meaning": "anus and rectum" },
    "suffix": { "part": "-logy", "meaning": "study of" }
  },
   {
    "term": "Prognosis",
    "definition": "Prediction about the outcome of an illness; knowledge beforehand",
    "prefix": { "part": "Pro-", "meaning": "before, forward" },
    "root": { "part": "gnos/o", "meaning": "knowledge" },
    "suffix": { "part": "-is", "meaning": "condition, state" }
  },
  {
    "term": "Prolapse",
    "definition": "Sliding forward or downward",
    "prefix": { "part": "Pro-", "meaning": "before, forward" },
    "root": { "part": "laps/o", "meaning": "to slide, fall, sag" },
    "suffix": { "part": "-e", "meaning": "noun ending" } // General suffix
  },
   {
    "term": "Prostatectomy",
    "definition": "Removal (excision) of the prostate gland",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Prostat/o", "meaning": "prostate gland" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Prostatitis",
    "definition": "Inflammation of the prostate gland",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Prostat/o", "meaning": "prostate gland" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Proteinuria", // Implied concept
    "definition": "Protein in the urine",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Protein/o", "meaning": "protein" },
    "suffix": { "part": "-uria", "meaning": "urination, urine condition" }
  },
   {
    "term": "Proximal",
    "definition": "Near the point of attachment or near the beginning of a structure",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Proxim/o", "meaning": "near" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Pruritus",
    "definition": "Itching",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Prurit/o", "meaning": "itching" },
    "suffix": { "part": "-us", "meaning": "condition, thing" } // General suffix
  },
  {
    "term": "Psychogenic",
    "definition": "Pertaining to produced within the mind",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Psych/o", "meaning": "mind" },
    "suffix": { "part": "-genic", "meaning": "produced by or in" }
  },
  {
    "term": "Psychology",
    "definition": "Study of the mind",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Psych/o", "meaning": "mind" },
    "suffix": { "part": "-logy", "meaning": "study of" }
  },
  {
    "term": "Psychosis",
    "definition": "Loss of contact with reality",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Psych/o", "meaning": "mind" },
    "suffix": { "part": "-osis", "meaning": "condition, usually abnormal" }
  },
   {
    "term": "Psychosomatic",
    "definition": "Pertaining to the inter-relationship of the mind and body",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Psych/o", "meaning": "mind" }, // Also Somat/o for body
    "suffix": { "part": "-somatic", "meaning": "pertaining to the body" } // Complex suffix
  },
  {
    "term": "Psychotherapy",
    "definition": "Treatment of the mind",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Psych/o", "meaning": "mind" },
    "suffix": { "part": "-therapy", "meaning": "treatment" }
  },
  {
    "term": "Ptosis",
    "definition": "Prolapse, drooping, sagging of the upper eyelid",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": null, "meaning": null }, // Root implied
    "suffix": { "part": "-ptosis", "meaning": "drooping, falling, prolapse" }
  },
  {
    "term": "Pubic",
    "definition": "Pertaining to the anterior part of the pelvis",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Pub/o", "meaning": "pubis (pubic bone)" },
    "suffix": { "part": "-ic", "meaning": "pertaining to" }
  },
  {
    "term": "Pulmonary",
    "definition": "Pertaining to the lungs",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Pulmon/o", "meaning": "lung" },
    "suffix": { "part": "-ary", "meaning": "pertaining to" }
  },
   {
    "term": "Pupillary",
    "definition": "Pertaining to the pupil of the eye",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Pupill/o", "meaning": "pupil" },
    "suffix": { "part": "-ary", "meaning": "pertaining to" }
  },
  {
    "term": "Pyelitis", // Implied term
    "definition": "Inflammation of the renal pelvis",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Pyel/o", "meaning": "renal pelvis" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Pyelogram",
    "definition": "X-ray record of the kidneys (renal pelvis) and urinary tract",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Pyel/o", "meaning": "renal pelvis" },
    "suffix": { "part": "-gram", "meaning": "record" }
  },
  {
    "term": "Pyelolithotomy",
    "definition": "Incision to remove a stone from the renal pelvis of the kidney",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Pyel/o", "meaning": "renal pelvis" }, // Also Lith/o for stone
    "suffix": { "part": "-lithotomy", "meaning": "incision to remove stones" } // Complex suffix
  },
  {
    "term": "Pyelonephritis",
    "definition": "Inflammation of the renal pelvis and kidney",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Pyel/o", "meaning": "renal pelvis" }, // Also Nephr/o for kidney
    "suffix": { "part": "-nephritis", "meaning": "inflammation of the kidney" } // Complex suffix
  },
  {
    "term": "Pyloric", // Implied from Pyloric stenosis
    "definition": "Pertaining to the pylorus (distal stomach)",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Pylor/o", "meaning": "pylorus, pyloric sphincter" },
    "suffix": { "part": "-ic", "meaning": "pertaining to" }
  },
  {
    "term": "Pyloroplasty",
    "definition": "Surgical repair of the pyloric sphincter",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Pylor/o", "meaning": "pylorus, pyloric sphincter" },
    "suffix": { "part": "-plasty", "meaning": "surgical repair" }
  },
  {
    "term": "Pylorospasm",
    "definition": "Involuntary contraction of muscles at the pyloric sphincter",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Pylor/o", "meaning": "pylorus, pyloric sphincter" },
    "suffix": { "part": "-spasm", "meaning": "sudden contraction of muscles" }
  },
  {
    "term": "Pyoderma",
    "definition": "Skin disease with formation of pus",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Py/o", "meaning": "pus" }, // Also Derm/o for skin
    "suffix": { "part": "-derma", "meaning": "skin condition" } // Complex suffix
  },
  {
    "term": "Pyorrhea",
    "definition": "Discharge of pus from the gums",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Py/o", "meaning": "pus" },
    "suffix": { "part": "-rrhea", "meaning": "flow, discharge" }
  },
  {
    "term": "Pyothorax",
    "definition": "Pus collection in the pleural cavity; empyema",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Py/o", "meaning": "pus" }, // Also Thorac/o for chest
    "suffix": { "part": "-thorax", "meaning": "chest, pleural cavity" }
  },
  {
    "term": "Pyuria",
    "definition": "Pus in urine",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Py/o", "meaning": "pus" },
    "suffix": { "part": "-uria", "meaning": "urination, urine condition" }
  },
  {
    "term": "Quadriplegia",
    "definition": "Paralysis of all four limbs",
    "prefix": { "part": "Quadri-", "meaning": "four" },
    "root": { "part": null, "meaning": null },
    "suffix": { "part": "-plegia", "meaning": "paralysis" }
  },

  // === R Terms ===
  {
    "term": "Radial",
    "definition": "Pertaining to the radius",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Radi/o", "meaning": "radius (lower arm bone)" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Radiculitis",
    "definition": "Inflammation of a spinal nerve root",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Radicul/o", "meaning": "nerve root" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Radiculopathy",
    "definition": "Disease of a spinal nerve root",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Radicul/o", "meaning": "nerve root" },
    "suffix": { "part": "-pathy", "meaning": "disease condition" }
  },
  {
    "term": "Radiography", // Implied term
    "definition": "Process of recording x-rays",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Radi/o", "meaning": "x-rays" },
    "suffix": { "part": "-graphy", "meaning": "process of recording" }
  },
  {
    "term": "Radiology",
    "definition": "Study of x-ray and other energy sources in the diagnosis of disease",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Radi/o", "meaning": "x-rays" },
    "suffix": { "part": "-logy", "meaning": "study of" }
  },
  {
    "term": "Radiotherapy",
    "definition": "Treatment using radiation",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Radi/o", "meaning": "x-rays, radiation" },
    "suffix": { "part": "-therapy", "meaning": "treatment" }
  },
  {
    "term": "Rectal",
    "definition": "Pertaining to the rectum",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Rect/o", "meaning": "rectum" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Rectocele",
    "definition": "Hernia of the rectum",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Rect/o", "meaning": "rectum" },
    "suffix": { "part": "-cele", "meaning": "hernia" }
  },
  {
    "term": "Renal",
    "definition": "Pertaining to the kidney",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ren/o", "meaning": "kidney" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Retinal", // Implied term
    "definition": "Pertaining to the retina",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Retin/o", "meaning": "retina" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Retinitis",
    "definition": "Inflammation of the retina",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Retin/o", "meaning": "retina" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Retinoblastoma",
    "definition": "Malignant tumor of the retina of the eye",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Retin/o", "meaning": "retina" },
    "suffix": { "part": "-blastoma", "meaning": "immature tumor" }
  },
  {
    "term": "Retinopathy", // Implied term from Diabetic/Hypertensive Retinopathy
    "definition": "Disease of the retina",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Retin/o", "meaning": "retina" },
    "suffix": { "part": "-pathy", "meaning": "disease condition" }
  },
  {
    "term": "Retrocardiac",
    "definition": "Pertaining to behind the heart",
    "prefix": { "part": "Retro-", "meaning": "behind, backward" },
    "root": { "part": "Cardi/o", "meaning": "heart" },
    "suffix": { "part": "-ac", "meaning": "pertaining to" }
  },
  {
    "term": "Retroperitoneal",
    "definition": "Pertaining to behind the peritoneum",
    "prefix": { "part": "Retro-", "meaning": "behind, backward" },
    "root": { "part": "Peritone/o", "meaning": "peritoneum" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Rhabdomyolysis",
    "definition": "Breakdown of damaged skeletal muscle",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Rhabdomy/o", "meaning": "skeletal (striated) muscle" },
    "suffix": { "part": "-lysis", "meaning": "breakdown, destruction, separation" }
  },
  {
    "term": "Rhabdomyoma",
    "definition": "Benign tumor of striated, voluntary muscle",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Rhabdomy/o", "meaning": "skeletal (striated) muscle" },
    "suffix": { "part": "-oma", "meaning": "tumor, mass" }
  },
  {
    "term": "Rhabdomyosarcoma",
    "definition": "Malignant tumor of striated, voluntary muscle",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Rhabdomy/o", "meaning": "skeletal (striated) muscle" }, // Also Sarc/o for flesh
    "suffix": { "part": "-sarcoma", "meaning": "malignant tumor of connective tissue" }
  },
  {
    "term": "Rhinitis",
    "definition": "Inflammation of the nose",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Rhin/o", "meaning": "nose" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Rhinoplasty",
    "definition": "Surgical repair of the nose",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Rhin/o", "meaning": "nose" },
    "suffix": { "part": "-plasty", "meaning": "surgical repair" }
  },
  {
    "term": "Rhinorrhea",
    "definition": "Discharge of mucus from the nose",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Rhin/o", "meaning": "nose" },
    "suffix": { "part": "-rrhea", "meaning": "flow, discharge" }
  },
   {
    "term": "Rhytidectomy",
    "definition": "Plastic surgery to remove wrinkles",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Rhytid/o", "meaning": "wrinkle" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },

  // === S Terms ===
  {
    "term": "Sacral",
    "definition": "Pertaining to the sacrum",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Sacr/o", "meaning": "sacrum" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Salpingectomy",
    "definition": "Removal of a fallopian tube",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Salping/o", "meaning": "fallopian tube" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Salpingitis",
    "definition": "Inflammation of a fallopian tube",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Salping/o", "meaning": "fallopian tube" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Salpingo-oophorectomy", // Implied term
    "definition": "Removal of fallopian tube and ovary",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Salping/o", "meaning": "fallopian tube" }, // Also Oophor/o for ovary
    "suffix": { "part": "-oophorectomy", "meaning": "removal of ovary" } // Complex suffix
  },
  {
    "term": "Sarcoma",
    "definition": "Tumor (malignant) of flesh tissue",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Sarc/o", "meaning": "flesh, connective tissue" },
    "suffix": { "part": "-oma", "meaning": "tumor, mass" }
  },
  {
    "term": "Sarcopenia",
    "definition": "Loss of muscle mass and strength",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Sarc/o", "meaning": "flesh (muscle)" },
    "suffix": { "part": "-penia", "meaning": "deficiency" }
  },
  {
    "term": "Scapular",
    "definition": "Pertaining to the shoulder blade",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Scapul/o", "meaning": "scapula (shoulder blade)" },
    "suffix": { "part": "-ar", "meaning": "pertaining to" }
  },
   {
    "term": "Scleritis",
    "definition": "Inflammation of the sclera",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Scler/o", "meaning": "sclera (white of eye), hard" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Sclerosis", // Implied from Arteriosclerosis, Otosclerosis etc.
    "definition": "Hardening",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Scler/o", "meaning": "hard" },
    "suffix": { "part": "-osis", "meaning": "condition, usually abnormal" }
  },
  {
    "term": "Scoliosis",
    "definition": "Abnormal condition of lateral (sideways) curvature of the spine",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Scoli/o", "meaning": "crooked, bent (lateral curve)" },
    "suffix": { "part": "-osis", "meaning": "condition, usually abnormal" }
  },
  {
    "term": "Seborrhea",
    "definition": "Condition marked by excessive secretion from sebaceous glands",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Seb/o", "meaning": "sebum (oil)" },
    "suffix": { "part": "-rrhea", "meaning": "flow, discharge" }
  },
   {
    "term": "Sialadenectomy",
    "definition": "Removal (excision) of a salivary gland",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Sialaden/o", "meaning": "salivary gland" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Sialadenitis",
    "definition": "Inflammation of a salivary gland",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Sialaden/o", "meaning": "salivary gland" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
   {
    "term": "Sialolith",
    "definition": "Salivary gland stone",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Sial/o", "meaning": "saliva, salivary gland" },
    "suffix": { "part": "-lith", "meaning": "stone, calculus" }
  },
   {
    "term": "Sideropenia",
    "definition": "Deficiency of iron in the blood",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Sider/o", "meaning": "iron" },
    "suffix": { "part": "-penia", "meaning": "deficiency" }
  },
  {
    "term": "Sigmoidoscopy",
    "definition": "Visual endoscopic examination of the sigmoid colon",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Sigmoid/o", "meaning": "sigmoid colon" },
    "suffix": { "part": "-scopy", "meaning": "process of visual examination" }
  },
  {
    "term": "Sinusitis",
    "definition": "Inflammation of paranasal sinuses",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Sinus/o", "meaning": "sinus, cavity" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Spermatogenesis",
    "definition": "Formation of sperm cells",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Spermat/o", "meaning": "spermatozoa, semen" },
    "suffix": { "part": "-genesis", "meaning": "producing, forming" }
  },
  {
    "term": "Spermolytic",
    "definition": "Pertaining to destruction of sperm",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Sperm/o", "meaning": "spermatozoa, semen" },
    "suffix": { "part": "-lytic", "meaning": "pertaining to destruction" }
  },
   {
    "term": "Spherocytosis",
    "definition": "Increase in numbers of sphere-shaped red blood cells",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Spher/o", "meaning": "globe, round" }, // Root (cyt/o) implied
    "suffix": { "part": "-cytosis", "meaning": "abnormal condition of cells (increase)" }
  },
  {
    "term": "Splenectomy",
    "definition": "Removal of the spleen",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Splen/o", "meaning": "spleen" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Splenomegaly",
    "definition": "Enlargement of the spleen",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Splen/o", "meaning": "spleen" },
    "suffix": { "part": "-megaly", "meaning": "enlargement" }
  },
  {
    "term": "Spondylitis", // From Ankylosing spondylitis
    "definition": "Inflammation of the vertebrae",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Spondyl/o", "meaning": "vertebra" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Spondylolisthesis",
    "definition": "Forward slipping (subluxation) of one vertebra over another",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Spondyl/o", "meaning": "vertebra" },
    "suffix": { "part": "-listhesis", "meaning": "slipping" }
  },
  {
    "term": "Spondylosis",
    "definition": "Abnormal condition of the spine characterized by stiffness and fixation",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Spondyl/o", "meaning": "vertebra" },
    "suffix": { "part": "-osis", "meaning": "condition, usually abnormal" }
  },
   {
    "term": "Stapedectomy",
    "definition": "Removal of the stapes",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Staped/o", "meaning": "stapes (middle ear bone)" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
   {
    "term": "Steatorrhea",
    "definition": "Discharge of fat in the feces",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Steat/o", "meaning": "fat" },
    "suffix": { "part": "-rrhea", "meaning": "flow, discharge" }
  },
   {
    "term": "Stenosis", // Implied term
    "definition": "Narrowing, tightening",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Sten/o", "meaning": "narrowed, constricted" },
    "suffix": { "part": "-sis", "meaning": "state of, condition" }
  },
   {
    "term": "Stomatitis",
    "definition": "Inflammation of the mouth",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Stomat/o", "meaning": "mouth" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
   {
    "term": "Subcostal",
    "definition": "Pertaining to under the ribs",
    "prefix": { "part": "Sub-", "meaning": "under, below" },
    "root": { "part": "Cost/o", "meaning": "rib" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Subcutaneous",
    "definition": "Pertaining to under the skin",
    "prefix": { "part": "Sub-", "meaning": "under, below" },
    "root": { "part": "cutane/o", "meaning": "skin" },
    "suffix": { "part": "-ous", "meaning": "pertaining to" }
  },
  {
    "term": "Subdural", // From Subdural hematoma
    "definition": "Pertaining to below the dura mater",
    "prefix": { "part": "Sub-", "meaning": "under, below" },
    "root": { "part": "Dur/o", "meaning": "dura mater" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
   {
    "term": "Subhepatic",
    "definition": "Pertaining to below the liver",
    "prefix": { "part": "Sub-", "meaning": "under, below" },
    "root": { "part": "Hepat/o", "meaning": "liver" },
    "suffix": { "part": "-ic", "meaning": "pertaining to" }
  },
  {
    "term": "Sublingual",
    "definition": "Pertaining to under the tongue",
    "prefix": { "part": "Sub-", "meaning": "under, below" },
    "root": { "part": "Lingu/o", "meaning": "tongue" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
   {
    "term": "Subungual",
    "definition": "Pertaining to under a nail",
    "prefix": { "part": "Sub-", "meaning": "under, below" },
    "root": { "part": "ungu/o", "meaning": "nail" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
   {
    "term": "Suprapubic",
    "definition": "Pertaining to above the pubic bones",
    "prefix": { "part": "Supra-", "meaning": "above, upper" },
    "root": { "part": "Pub/o", "meaning": "pubis (pubic bone)" },
    "suffix": { "part": "-ic", "meaning": "pertaining to" }
  },
  {
    "term": "Synovitis",
    "definition": "Inflammation of the synovial membrane lining the synovial joint",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Synov/o", "meaning": "synovial membrane" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
   {
    "term": "Systemic", // From Systemic circulation, Systemic lupus erythematosus
    "definition": "Pertaining to the whole body",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "System/o", "meaning": "system, whole" }, // Non-standard root
    "suffix": { "part": "-ic", "meaning": "pertaining to" }
  },
  {
    "term": "Systole",
    "definition": "Contraction phase of the heartbeat",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Systol/o", "meaning": "contraction" },
    "suffix": { "part": "-e", "meaning": "noun ending" }
  },

  // === T Terms ===
  {
    "term": "Tachycardia",
    "definition": "Rapid heartbeat",
    "prefix": { "part": "Tachy-", "meaning": "fast" },
    "root": { "part": "Cardi/o", "meaning": "heart" },
    "suffix": { "part": "-ia", "meaning": "condition" }
  },
  {
    "term": "Tachypnea",
    "definition": "Abnormally rapid breathing",
    "prefix": { "part": "Tachy-", "meaning": "fast" },
    "root": { "part": "pne/o", "meaning": "breathing" },
    "suffix": { "part": "-a", "meaning": "condition/state" }
  },
  {
    "term": "Tarsectomy",
    "definition": "Removal of an ankle bone",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Tars/o", "meaning": "tarsals (ankle bones)" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Tendinitis", // Implied term
    "definition": "Inflammation of a tendon",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Tendin/o", "meaning": "tendon" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
   {
    "term": "Tenorrhaphy",
    "definition": "Suture of a tendon",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ten/o", "meaning": "tendon" }, // Also Tendin/o
    "suffix": { "part": "-rrhaphy", "meaning": "suture" }
  },
  {
    "term": "Tenosynovitis",
    "definition": "Inflammation of a tendon and its sheath",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ten/o", "meaning": "tendon" }, // Also Synov/o for sheath/synovial membrane
    "suffix": { "part": "-synovitis", "meaning": "inflammation of synovial membrane" } // Complex suffix
  },
  {
    "term": "Testicular",
    "definition": "Pertaining to a testis or testicle",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Testicul/o", "meaning": "testis, testicle" },
    "suffix": { "part": "-ar", "meaning": "pertaining to" }
  },
  {
    "term": "Thoracentesis",
    "definition": "Surgical puncture to remove fluid from the chest",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Thorac/o", "meaning": "chest" },
    "suffix": { "part": "-centesis", "meaning": "surgical puncture to remove fluid" }
  },
  {
    "term": "Thoracic",
    "definition": "Pertaining to the chest",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Thorac/o", "meaning": "chest" },
    "suffix": { "part": "-ic", "meaning": "pertaining to" }
  },
  {
    "term": "Thoracoscopy",
    "definition": "Visual examination of the chest using small incision and an endoscope",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Thorac/o", "meaning": "chest" },
    "suffix": { "part": "-scopy", "meaning": "process of visual examination" }
  },
  {
    "term": "Thoracotomy",
    "definition": "Incision of the chest",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Thorac/o", "meaning": "chest" },
    "suffix": { "part": "-tomy", "meaning": "incision, cutting into" }
  },
  {
    "term": "Thrombocyte",
    "definition": "Clotting cell; platelet",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Thromb/o", "meaning": "clot" },
    "suffix": { "part": "-cyte", "meaning": "cell" }
  },
  {
    "term": "Thrombocytopenia",
    "definition": "Deficiency of clotting cells",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Thromb/o", "meaning": "clot" }, // Root (cyt/o) implied
    "suffix": { "part": "-cytopenia", "meaning": "deficiency of cells" }
  },
  {
    "term": "Thrombolysis",
    "definition": "Destruction of a clot",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Thromb/o", "meaning": "clot" },
    "suffix": { "part": "-lysis", "meaning": "breakdown, destruction, separation" }
  },
  {
    "term": "Thrombophlebitis",
    "definition": "Inflammation of a vein associated with formation of a thrombus or clot",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Thromb/o", "meaning": "clot" }, // Also Phleb/o for vein
    "suffix": { "part": "-phlebitis", "meaning": "inflammation of a vein" } // Complex suffix
  },
  {
    "term": "Thrombosis",
    "definition": "Abnormal condition of clot formation in a blood vessel",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Thromb/o", "meaning": "clot" },
    "suffix": { "part": "-osis", "meaning": "condition, usually abnormal" }
  },
   {
    "term": "Thymectomy",
    "definition": "Removal of the thymus gland",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Thym/o", "meaning": "thymus gland" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Thymoma",
    "definition": "Tumor of the thymus gland",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Thym/o", "meaning": "thymus gland" },
    "suffix": { "part": "-oma", "meaning": "tumor, mass" }
  },
  {
    "term": "Thyroidectomy", // Implied term
    "definition": "Removal of the thyroid gland",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Thyroid/o", "meaning": "thyroid gland" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Thyroiditis",
    "definition": "Inflammation of the thyroid gland",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Thyroid/o", "meaning": "thyroid gland" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Thyrotoxicosis",
    "definition": "Hyperthyroidism (overactivity of the thyroid gland)", // Definition simplified
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Thyr/o", "meaning": "thyroid gland" }, // Also Toxic/o for poison
    "suffix": { "part": "-toxicosis", "meaning": "abnormal condition caused by poison" } // Complex suffix
  },
  {
    "term": "Tibial",
    "definition": "Pertaining to the larger of the two lower leg bones",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Tibi/o", "meaning": "tibia" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Tonsillar",
    "definition": "Pertaining to the tonsils",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Tonsill/o", "meaning": "tonsils" },
    "suffix": { "part": "-ar", "meaning": "pertaining to" }
  },
  {
    "term": "Tonsillectomy",
    "definition": "Removal of tonsils",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Tonsill/o", "meaning": "tonsils" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Tonsillitis",
    "definition": "Inflammation of tonsils",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Tonsill/o", "meaning": "tonsils" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Toxicology",
    "definition": "Branch of pharmacology that studies harmful chemicals", // Definition simplified
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Toxic/o", "meaning": "poison" },
    "suffix": { "part": "-logy", "meaning": "study of" }
  },
  {
    "term": "Tracheal",
    "definition": "Pertaining to the trachea",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Trache/o", "meaning": "trachea (windpipe)" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
   {
    "term": "Tracheostomy",
    "definition": "New opening of the trachea to the outside of the body",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Trache/o", "meaning": "trachea (windpipe)" },
    "suffix": { "part": "-stomy", "meaning": "new opening" }
  },
  {
    "term": "Tracheotomy",
    "definition": "Incision of the trachea",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Trache/o", "meaning": "trachea (windpipe)" },
    "suffix": { "part": "-tomy", "meaning": "incision, cutting into" }
  },
  {
    "term": "Transhepatic",
    "definition": "Pertaining to through or across the liver",
    "prefix": { "part": "Trans-", "meaning": "across, through" },
    "root": { "part": "Hepat/o", "meaning": "liver" },
    "suffix": { "part": "-ic", "meaning": "pertaining to" }
  },
  {
    "term": "Transurethral",
    "definition": "Pertaining to across or through the urethra",
    "prefix": { "part": "Trans-", "meaning": "across, through" },
    "root": { "part": "urethr/o", "meaning": "urethra" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Trigone",
    "definition": "Triangular area in the urinary bladder",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Trigon/o", "meaning": "trigone (region of bladder)" },
    "suffix": { "part": "-e", "meaning": "noun ending" } // General suffix
  },
  {
    "term": "Trigonitis",
    "definition": "Inflammation of the trigone of the urinary bladder",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Trigon/o", "meaning": "trigone (region of bladder)" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
   {
    "term": "Tympanoplasty",
    "definition": "Surgical repair of the eardrum",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Tympan/o", "meaning": "eardrum (tympanic membrane)" },
    "suffix": { "part": "-plasty", "meaning": "surgical repair" }
  },

  // === U Terms ===
  {
    "term": "Ultrasonography",
    "definition": "Use of high frequency sound waves to produce a record or picture",
    "prefix": { "part": "Ultra-", "meaning": "beyond, excess" },
    "root": { "part": "son/o", "meaning": "sound" },
    "suffix": { "part": "-graphy", "meaning": "process of recording" }
  },
  {
    "term": "Unilateral",
    "definition": "Pertaining to one side",
    "prefix": { "part": "Uni-", "meaning": "one" },
    "root": { "part": "later/o", "meaning": "side" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Uremia",
    "definition": "Excessive amount of urea and other nitrogenous wastes in the blood",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ur/o", "meaning": "urine" },
    "suffix": { "part": "-emia", "meaning": "blood condition" }
  },
  {
    "term": "Ureteroileostomy",
    "definition": "New opening of the ureters to a portion of the ileum",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ureter/o", "meaning": "ureter" }, // Also Ile/o for ileum
    "suffix": { "part": "-ileostomy", "meaning": "new opening into the ileum" } // Complex suffix
  },
  {
    "term": "Ureteroplasty",
    "definition": "Surgical repair of ureter",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ureter/o", "meaning": "ureter" },
    "suffix": { "part": "-plasty", "meaning": "surgical repair" }
  },
  {
    "term": "Urethritis",
    "definition": "Inflammation of the urethra",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Urethr/o", "meaning": "urethra" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Urethroplasty",
    "definition": "Surgical repair of the urethra",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Urethr/o", "meaning": "urethra" },
    "suffix": { "part": "-plasty", "meaning": "surgical repair" }
  },
   {
    "term": "Urinalysis",
    "definition": "Series of tests to evaluate the composition of urine",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Urin/o", "meaning": "urine" },
    "suffix": { "part": "-analysis", "meaning": "separation into parts" } // Descriptive suffix
  },
  {
    "term": "Urology", // Implied from Urologist
    "definition": "Study of the urinary tract",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ur/o", "meaning": "urine, urinary tract" },
    "suffix": { "part": "-logy", "meaning": "study of" }
  },
   {
    "term": "Uterine", // Implied from Uterine prolapse
    "definition": "Pertaining to the uterus",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Uter/o", "meaning": "uterus" },
    "suffix": { "part": "-ine", "meaning": "pertaining to" }
  },
  {
    "term": "Uveitis",
    "definition": "Inflammation of the uvea",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Uve/o", "meaning": "uvea (vascular layer of eye)" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Uvulectomy",
    "definition": "Removal (excision) of the uvula",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Uvul/o", "meaning": "uvula" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },

  // === V Terms ===
  {
    "term": "Vaginitis",
    "definition": "Inflammation of the vagina",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Vagin/o", "meaning": "vagina" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Valvotomy",
    "definition": "Incision of a valve",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Valv/o", "meaning": "valve" }, // Also Valvul/o
    "suffix": { "part": "-tomy", "meaning": "incision, cutting into" }
  },
  {
    "term": "Valvuloplasty",
    "definition": "Surgical repair of a valve",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Valvul/o", "meaning": "valve" },
    "suffix": { "part": "-plasty", "meaning": "surgical repair" }
  },
  {
    "term": "Varicocele",
    "definition": "Enlarged, dilated veins near a testicle",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Varic/o", "meaning": "varicose veins, swollen twisted vein" },
    "suffix": { "part": "-cele", "meaning": "hernia" }
  },
  {
    "term": "Vascular",
    "definition": "Pertaining to a blood vessels",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Vascul/o", "meaning": "vessel (blood)" },
    "suffix": { "part": "-ar", "meaning": "pertaining to" }
  },
  {
    "term": "Vasectomy",
    "definition": "Bilateral surgical removal of a part of the vas deferens",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Vas/o", "meaning": "vessel, duct (vas deferens)" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Vasoconstriction",
    "definition": "Narrowing of a blood vessel",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Vas/o", "meaning": "vessel" },
    "suffix": { "part": "-constriction", "meaning": "narrowing" } // Descriptive suffix
  },
  {
    "term": "Vasodilation",
    "definition": "Widening of a blood vessel",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Vas/o", "meaning": "vessel" },
    "suffix": { "part": "-dilation", "meaning": "widening, stretching" } // Descriptive suffix
  },
  {
    "term": "Vasovasostomy",
    "definition": "Rejoining the cut ends of the vas deferens",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Vas/o", "meaning": "vessel, duct (vas deferens)" },
    "suffix": { "part": "-vasostomy", "meaning": "new opening between ducts" } // Complex suffix
  },
  {
    "term": "Venipuncture",
    "definition": "Incision of a vein to remove blood",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ven/i", "meaning": "vein" },
    "suffix": { "part": "-puncture", "meaning": "to pierce a surface" } // Descriptive suffix
  },
  {
    "term": "Venous",
    "definition": "Pertaining to a vein",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ven/o", "meaning": "vein" }, // Also Ven/i
    "suffix": { "part": "-ous", "meaning": "pertaining to" }
  },
   {
    "term": "Ventral",
    "definition": "Pertaining to the front or anterior portion of the body",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Ventr/o", "meaning": "belly side of body (front)" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
   {
    "term": "Vertebral",
    "definition": "Pertaining to backbones",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Vertebr/o", "meaning": "vertebra (backbone)" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Vertebroplasty",
    "definition": "Surgical repair of a vertebra",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Vertebr/o", "meaning": "vertebra (backbone)" },
    "suffix": { "part": "-plasty", "meaning": "surgical repair" }
  },
  {
    "term": "Visceral",
    "definition": "Pertaining to internal organs",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Viscer/o", "meaning": "internal organs" },
    "suffix": { "part": "-al", "meaning": "pertaining to" }
  },
  {
    "term": "Vitrectomy",
    "definition": "Removal of vitreous humor",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Vitre/o", "meaning": "glassy (vitreous humor)" },
    "suffix": { "part": "-ectomy", "meaning": "removal, excision" }
  },
  {
    "term": "Vulvitis", // Implied term
    "definition": "Inflammation of the vulva",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Vulv/o", "meaning": "vulva" },
    "suffix": { "part": "-itis", "meaning": "inflammation" }
  },
  {
    "term": "Vulvodynia",
    "definition": "Pain in the female genitalia",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Vulv/o", "meaning": "vulva" },
    "suffix": { "part": "-dynia", "meaning": "pain" }
  },
  {
    "term": "Vulvovaginitis",
    "definition": "Inflammation of the vulva and vagina",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Vulv/o", "meaning": "vulva" }, // Also Vagin/o for vagina
    "suffix": { "part": "-vaginitis", "meaning": "inflammation of the vagina" } // Complex suffix
  },

  // === W Terms ===
  // (Few terms fit the model well)

  // === X Terms ===
  {
    "term": "Xanthoma",
    "definition": "Soft, yellowish, round nodule",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Xanth/o", "meaning": "yellow" },
    "suffix": { "part": "-oma", "meaning": "tumor, mass" }
  },
  {
    "term": "Xenophobia",
    "definition": "Fear of strangers",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Xen/o", "meaning": "stranger, foreign" },
    "suffix": { "part": "-phobia", "meaning": "fear" }
  },
  {
    "term": "Xeroderma", // Implied from Xerosis
    "definition": "Very dry skin",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Xer/o", "meaning": "dry" },
    "suffix": { "part": "-derma", "meaning": "skin condition" }
  },
  {
    "term": "Xerophthalmia",
    "definition": "Condition of excessive dryness of the eye",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Xer/o", "meaning": "dry" }, // Also Ophthalm/o for eye
    "suffix": { "part": "-ophthalmia", "meaning": "condition of the eye" } // Complex suffix
  },
  {
    "term": "Xerostomia",
    "definition": "Dryness of the mouth",
    "prefix": { "part": null, "meaning": null },
    "root": { "part": "Xer/o", "meaning": "dry" }, // Also Stom/o for mouth
    "suffix": { "part": "-stomia", "meaning": "condition of the mouth" } // Complex suffix
  }
  // Continue adding more suitable terms here...
];