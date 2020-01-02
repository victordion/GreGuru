// ==UserScript==
// @name         GREGuru
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Victor Cui
// @match        https://*/*
// @require      https://code.jquery.com/jquery-latest.min.js
// @require      https://cdn.jsdelivr.net/mark.js/8.6.0/jquery.mark.min.js
// @grant        none
// ==/UserScript==

/*!***************************************************
 * mark.js v8.6.0
 * https://github.com/julmot/mark.js
 * Copyright (c) 2014–2017, Julian Motz
 * Released under the MIT license https://git.io/vwTVl
 *****************************************************/

var str = 'abacus                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       glean glib glimmer gloat glut gnaw goad gorge gossamer gouge grandiloquent grave graze gregarious grievous grovel guile gullible gush gust hack halcyon hallow harangue harbinger harrow haughty heed heinous heresy hermetic heterogeneous hew highbrow hirsute hoax hoi hollow holster homiletics hone hoodwink hospitable hubris hush husk hypocrisy iconoclast idiosyncrasy idolatry idyll ignoble ignominious illicit imbroglio immaculate imminent immutable impair impassive impecunious impede impediment impending imperative imperious impermeable imperturbable impervious imperviousness impetuous impiety implacable implicate implicit implosion importune imprecation impromptu impudent impugned impute inadvertent inane inasmuch incense incessant inchoate incipient incise incite inclined incongruous incorrigibility incredulous inculcate incumbents incursion indefatigability indelible indigence indigenous indistinct indolence indomitable indulge indulgent ineffable ineluctable inept ineptitude inferno infuriate infuse ingenuous ingest inimical inimitable innocuous inscrutable insensible insinuate insipid insouciant insularity insurrection interdict interim intersperse intransigence intransigent intrepid introspection inundate inured invective inveigh inveterate invincible involute irascible irate ire irksome irresolute irrevocable itinerate jabber jibe jocular judicious knit labyrinthine lachrymose lackluster lament lassitude latent laudatory lavish legacy levee levity libel liberality libertine lien limn limp lionize lithe loll lope loquacious lucubrate luculent lugubrious lull lumber luminary lurk lustrous macabre macerate machination maladroit malapropism malevolence malign malinger malleable manacle massacre matriculation maudlin maul maverick mellifluous mendacity mendicant mercurial meretricious mesmerize meticulous mettle mettlesome middling minatory mince misanthrope mischievous miser misogynist moderation mollify molt morbid morose muffler multifarious mundane myriad nadir nascent nebulous negligent neophyte nexus nibble noisome nonchalant nonplused nostrum noxious nugatory obdurate obfuscate oblivious obloquy obsequious obstreperous obtain obtrusive obtuse obviate occluded odious odium odor officious ominous onerous opaqueness opprobrious ossify ostensible ostentation ostracism overhaul overweening paean palate palatial palliate palpability palpitate panegyric paradigm parenthesis pariah parsimonious partisan patron paucity peccadillo pedantic pedestrian pellucid penchant penitent penurious penury peregrination peremptory perfidious perfidy perfunctory perilous peripatetic perish perjury permeate pernicious perpetrate personable perspicacity pertain pest petrified petrify petrous petulant philistine phlegmatic picaresque pied pinch pine pious piquant pique pitfall pith pivotal placate plaintive plaque platitude plea plead plethora pliant plod pluck plumb plummet plunge poignant poncho ponderous portent precarious precepts preclude precursory predilection predominate preen premature preponderance presage presumption preternatural prevalent prevaricate prim pristine probity proclivity procrastination prodigal prodigious profane profligacy profligate profundity profuse proliferate prolix prone propagation propinquity propitiatory propitious prosaic proscribe protracted provident provisional provoke prudence prudish prune pry pucker pugnacious puissance punctilious pundit pungency purvey pusillanimous putrefaction pyre quack quaff quail qualm quandary quell quibble quiescence quiescent quirk quixotic quotidian rabble raconteur raffish ramify rancorous rant rapacious rarefy rave reactionary rebuff recalcitrant recant recast recidivism reciprocity recitals recluse recompense reconcile recondite recreancy recuperate redeem redoubtable refine refractory refulgent regale regicide reiterate rejuvenation relapse remonstrate render renovate renowned repast repel repine reproach reprobate repudiate repulsive requite rescind resigned resilience resort restive resuscitation retard reticent revere reverent riddle rift rivet roll rotund ruffian rumple sagacious salacious salubrious salutary sanctimony sanction sanguine sanity sash satiate saturnine savant savor sawdust scabbard scent scorch scribble scurvy secular sedulous seminal sententious sequence sere sermon serrated serration servile sever severance shallow shard sheath shrewd shrill shun shunt sidestep simper sinuous skiff skit slack slake slate sluggard slur smolder snare snub soar sober sobriety sodden soggy solvent somatic soot sophisticated sophistry sophomoric soporific sordid spear specious splenetic splice sponge spurious spurn squalid squander squat stanch steeply stentorian stickler stigma stigmatize sting stingy stint stipple stipulate stolid stray streak striated stride strut stygian stymie subdue sublime submerge suborn subpoena substantiation subsume succor suffice suffocate sullied summarily sumptuous sundry supercilious superfluous superimpose supersede supine suppliant supplicate suppress surcharge surfeit susceptibility swerve sycophant synopsis taciturn tadpole talon tamp tamper tangential tarnished tassel taunt taut tautology tawdry teetotal temerity temperance temperate tenacity tenuous tepid terse testiness thrift thwart timid timorous toady tonic topple torment torpid torque tortuous tout tractable transgress transient transitory travesty trenchant trepidation trickle trifling trite truce truculence trudge turbid turbulence turgid turmoil turpitude turquoise tyro ubiquitous ulterior umbrage uncouth underbid undermine undulate unearth unencumbered unfeigned unscathed untoward upbraid urbane vacillation vagary vain valiant valorous vanquish veer venal veneer veneration veracity verdant verisimilitude veritable verve vestige vex vigilance vigilant vigorous vilify vindictive virago visceral viscous vitiate vituperate vivacious volatile volubility voluble waffle waft wag warmonger warrant wean weigh welter wend whimsical wince woo writ yarn';
const grewords = new Set(str.split(" "));
var body = $("body");
var textNodes = [];
var seen = new Set();

function walkDOM(node, callback) {
    if (node.nodeName != 'SCRIPT') { // ignore javascript
        callback(node);
        for (var i = 0; i < node.childNodes.length; i++) {
            walkDOM(node.childNodes[i], callback);
        }
    }
}

walkDOM(document.body, function(n){
    if (n.nodeType == 3) {
        textNodes.push(n);
    }
});

for (var i = 0; i < textNodes.length; i++) {
    var words = textNodes[i].textContent.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g,"").split(/(\s+)/);
    for (var j = 0; j < words.length; j++) {
        // console.log("Checking " + words[j]);
        if (grewords.has(words[j]) && !seen.has(words[j])) {
            console.log("Found: " + words[j]);
            body.mark(words[j], {"accuracy": "exactly"});
            seen.add(words[j]);
        }
    }
}
