document.querySelectorAll(".abstract").forEach((elem) =>
  elem.addEventListener("click", (e) => {
    if (e.target.value === "decentralization") {
      document.getElementById("index").innerHTML = `
    <h1>Decentralization and consumer welfare with substitutes or complements.</h1>
    <h3> <em> Review of Industrial Organization</em>, 2024, published online.</h3>
    <p><small>DOI: <a href="https://link.springer.com/article/10.1007/s11151-023-09941-x"> https://link.springer.com/article/10.1007/s11151-023-09941-x</a></small></p>
    <p> <strong> Abstract: </strong> We study a vertically integrated producer (VIP) that supplies a downstream firm under price competition. The VIP may decentralize the final price decision to its downstream unit; the latter thereby ignores the effect of the output price on upstream sales. We find that decentralization benefits the VIP -- irrespective of whether the products are substitutes or complements. Decentralization also benefits the consumers when products are substitutes, but it harms them when the products are complements. Interestingly, when products are substitutes, decentralization decreases both output prices despite restoring a double margin on the downstream unit's sales.</p>
    <a href="./index.html"> [Back] </a>
    `;
    } else if (e.target.value === "management") {
      document.getElementById("index").innerHTML = `
    <h1>Management Turnover, Strategic Ambiguity and Supply Incentives.</h1>
    <h4> with Pascal Toquebeuf. </h3>
    <h3> <em> The B.E. Journal of Theoretical Economics</em>, 2023, Vol. 23 (1), pp. 121-154.</h3>
    <p><small>DOI: <a href="https://www.degruyter.com/document/doi/10.1515/bejte-2021-0070/html"> https://www.degruyter.com/document/doi/10.1515/bejte-2021-0070/html</a></small></p>
    <br>
    <p> <strong> Abstract: </strong> When a firm appoints a new manager, it reopens the possibility of new contractual friction with its partners. We explore strategic ambiguity as a potential for friction with a supplier. The firm's new manager probably has fuzzy expectations about the supplier's strategy. An optimistic manager weights favorable strategies more heavily than detrimental ones, whereas a pessimistic manager does the opposite. We show that the manager's degree of optimism is critical: above a threshold, it can cause the supplier to change the timing of its contracting and increase its profits. We also find that this threshold degree of optimism depends on the degree of product substitution: it is more stringent with imperfect substitutes than with perfect substitutes or unrelated goods.</p>
    <a href="./index.html"> [Back] </a>
    `;
    } else if (e.target.value === "selection") {
      document.getElementById("index").innerHTML = `
    <h1>Risk aversion and equilibrium selection in a vertical contracting setting: An experiment.</h1>
    <h4> with Olivier Bonroy and Alexis Garapin. </h3>
    <h3> <em>Theory and Decision</em>, 2022, Vol. 93(4), pp. 585-614.</h3>
    <p><small>DOI: <a href="https://link.springer.com/article/10.1007/s11238-022-09868-x"> https://link.springer.com/article/10.1007/s11238-022-09868-x</a></small></p>
    <br>
    <p> <strong> Abstract: </strong> The theoretical literature on vertical relationships usually assumes that beliefs about secret contracts take specific forms. In a recent paper, Eguia et al. (2018) propose a new selection criterion that does not impose any restriction on beliefs. In this article, we extend their criterion by generalizing it to risk-averse retailers, and we show that risk aversion modifies the size of the belief subsets that support each equilibrium. We conduct an experiment which revisits that of Eguia et al. (2018). We design a new treatment effect on equilibrium selection depending on the retailers' risk sensitivity. Experimental results confirm the treatment effect: the more sensitivity there is towards risk, the more the equilibrium played is consistent with passive beliefs. In addition, extending Eguia et al.'s (2018) criterion to risk-averse retailers improves its predictive power on the equilibria played, especially for a population of retailers with moderate to extreme risk aversion.</p>
    <a href="./index.html"> [Back] </a>
    `;
    } else if (e.target.value === "multiple-risks") {
      document.getElementById("index").innerHTML = `
    <h1>Multiple agricultural risks and insurance -- Issues, perspectives and illustration for wine-growing.</h1>
    <h4> with Cécile Aubert, Yann Raineau and Marc Raynal. </h3>
    <h3> <em>R&R at Review of Agricultural, Food and Environmental Studies</em>, Latest Version: September 2023.</h3>
    <p><small>Draft link: <a href=""> ... </a></small></p>
    <br>
    <p> <strong> Abstract: </strong> We investigate to what extent crop insurance can address the multiple risks faced by
    agricultural producers. Climatic, disease, technological and financial risks make insurance
    especially valuable to farmers. But their interactions and regulatory constraints also make
    insurance especially difficult to design. We stress that some risks (such as heavy rainfalls)
    can affect the feasibility of prevention and curative actions for other risks (such as crop diseases), so that risks, beyond correlation, compound in a complex way. In addition, existing
    regulations impose strong constraints that affect farmers' behavior.
    We contrast insurance in the US and in the EU, where different types of risks are covered.
    We illustrate some of the interactions between multiple risks, regulatory constraints on insurance and farmers' actions with the case of wine-growing in the South-West of France. We
    present data on correlation between rainfalls and mildew, and results from a real experiment
    designed to reduce treatments thanks to a conditional insurance.</p>
    <a href="./index.html"> [Back] </a>
    `;
    } else if (e.target.value === "amazon") {
      document.getElementById("index").innerHTML = `
    <h1>Winners and Losers of Gatekeeper-Induced Consumer Preference Distortion in Promoting Personalized Pricing by Asymmetric Firms.</h1>
    <h4> with Rosa Branca Esteves. </h3>
    <h3> <em>Submitted</em>, Latest Version: February 2024.</h3>
    <p><small>Draft link: <a href=""> ... </a></small></p>
    <br>
    <p> <strong> Abstract: </strong> We present a model of duopoly competition in a marketplace with a Hotelling segment of consumers, where two business users (firms) have access to raw consumer data. The firms can choose between personalized prices (PP), using a costly personalized program device provided by the marketplace, or uniform prices at no additional cost. One firm has a higher level of experience in utilizing consumer data, resulting in a lower cost of price personalization (PP device cost). In order to promote its personalized program device, the marketplace may have an incentive to distort consumer preferences from a uniform to a triangular distribution. Our findings indicate that the marketplace is more likely to distort consumer preferences under specific conditions. This occurs when there is moderate asymmetry in experience between the firms and a high tariff for the program, or when there is weak asymmetry and a moderate program tariff. In these parameter regions, the distortion of consumer preferences negatively impact the profits of the sellers while benefiting the consumers. These insights contribute to a better understanding of the dynamics of digital marketplaces and have implications for policymakers and competition authorities.</p>
    <a href="./index.html"> [Back] </a>
    `;
    } else if (e.target.value === "demand-uncertainty") {
      document.getElementById("index").innerHTML = `
    <h1>Two part tariff, demand uncertainty and risk aversion: From theory to experimental evidence.</h1>
    <h4> with Olivier Bonroy and Alexis Garapin. </h3>
    <h3> <em>Submitted</em>, Latest Version: October 2023.</h3>
    <p><small>Draft link: <a href=""> ... </a></small></p>
    <br>
    <p> <strong> Abstract: </strong> In an uncertain demand environment, Rey and Tirole (1986) show that the per unit price of a two-part tariff may have insurance properties, insofar as it transfers risk from downstream firms to upstream firms. In this paper, we test this result in an experiment where the role of the subjects is controlled according to their elicited risk aversion. The role of the downstream firms is then held by the most risk averse subjects. When the probability of meeting positive demand is high, the experimental results confirm the the- oretical prediction: the per unit price has insurance properties such that it is higher than in a certain demand environment and the part of the rent extracted by the fixed part is lower. However, this insurance property does not stand in the experimental results when the probability of meeting positive demand is low. The results show that in such cases there is insurance demand, and that high unit prices are therefore accepted, but that this insurance demand is not satisfied enough.</p>
    <a href="./index.html"> [Back] </a>
    `;
    } else if (e.target.value === "colza") {
      document.getElementById("index").innerHTML = `
    <h1>Promotion of emission-based innovations in the biofuel sector.</h1>
    <h4> with Stéphane Lemarié. </h3>
    <h3> <em>New version available soon</em>, Latest Version: ...</h3>
    <p><small>Draft link: <a href=""> ... </a></small></p>
    <br>
    <p> <strong> Abstract: </strong> Innovations leading to the reduction of GHG emissions constitute an important lever in the fight against pollution and climate change. These innovations however often occupy niche markets. The economic literature mainly delivers insights on the promotion of innovations reducing the production costs of renewable inputs. The present focuses on emission-based innoavtions and compares the effects of various regulations on the adoption of these innovations. The analysis builds on a theoretical partial equilibrium model representing a fuel industry that mixes biofuels with fossil fuels, in the presence of an upstream innovator who has developed an innovation reducing the level of biofuel GHG emissions. We show that the fuel industry has no incentive to adopt emissions-based innovation if there is no regulation or if the regulation is on quantities (e.g. quota). This first result therefore shows a limit to this last widespread regulation which usually promotes the adoption of innovations based on costs. We then show that the industry can adopt emissions innovation with an excise tax, or an emission standard (including a maximum fuel emission level final). With a tax, such adoption is only beneficial with a sufficienlty high tax rate or an innovation that sufficiently reduces emissions. On the contrary, with a standard, such an adoption is beneficial with sufficiently strict standards and if the innovation reduces slightly the emissions . This last counterintuitive result implies that standards and taxes do not promote the same level of innovation. Finally, we show that standards promote both emission-based and cost-based innovations.</p>
    <a href="./index.html"> [Back] </a>
    `;
    } else if (e.target.value === "survey") {
      document.getElementById("index").innerHTML = `
    <h1>Crop insurances and pesticide use: A survey of empirical results
    with added focus on wine-growing.</h1>
    <h4> with Cécile Aubert. </h3>
    <h3> <em>New version available soon</em>, Latest Version: November 2023.</h3>
    <p><small>Draft link: <a href=""> ... </a></small></p>
    <br>
    <p> <strong> Abstract: </strong> Crop insurance is a major component of the U.S. agricultural policy toolbox. On the contrary, only a small minority of E.U. farmers hold a subsidized insurance policy. We contrast the existing systems of subsidized insurance, that cover different risks. Interestingly, these different schemes give rise to different incentives for farmers to preserve the environment, in terms of adaptation, land use, and pesticide use. We focus on this latter aspect of the moral hazard problem and summarize existing empirical results. Apparently contradictory or inconclusive results can be related to the insurance system and crops under study. We discuss existing evidence about the impact on farmers' choices of green insurance -- an insurance contract conditional on pre-specified environmentally-friendly farmer behaviors. We offer a more in-depth survey for wine-growing, where pesticides are very inexpensive compared to the end-product, the extensive margin is quasi-null, and climatic and pest risks are correlated.</p>
    <a href="./index.html"> [Back] </a>
    `;
    } else if (e.target.value === "data-insurance") {
      document.getElementById("index").innerHTML = `
    <h1>Data-sharing in crop insurance:
    when farmer pessimism can reduce pesticide use.</h1>
    <h3> <em>Available soon</em>, Latest Version: January 2024.</h3>
    <p><small>Draft link: <a href=""> ... </a></small></p>
    <br>
    <p> <strong> Abstract: </strong> Coming soon.</p>
    <a href="./index.html"> [Back] </a>
    `;
    } else if (e.target.value === "public-game") {
      document.getElementById("index").innerHTML = `
    <h1>Threshold public good games with model uncertainty.</h1>
    <h3> <em>Available soon</em>, Latest Version: April 2022.</h3>
    <p><small>Draft link: <a href=""> ... </a></small></p>
    <br>
    <p> <strong> Abstract: </strong> Various collective action problems can be described as discrete public good games with a threshold. In such games, a public good is provided when total contributions exceed a threshold. Yet, the latter is often not known with certainty because multiple models may predict its true value. We derive equilibria when players are either aware or ignorant about which model to pick. In other words, ambiguity may arise as a second layer of uncertainty (ignorance of which model to pick) in addition to risk which constitutes the first layer of uncertainty (each model only predicts the true threshold). When the contribution cost is sufficiently low, our result contrasts the existing literature: (i) the ignorant players contribute more than the aware players, and (ii) ignorance triggers a ”ratchet effect” yielding a minimum number of ignorant players to contribute.</p>
    <a href="./index.html"> [Back] </a>
    `;
    }
  })
);
