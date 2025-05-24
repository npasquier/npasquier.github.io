document.querySelectorAll(".abstract").forEach((elem) =>
  elem.addEventListener("click", (e) => {
    if (e.target.value === "decentralization") {
      document.getElementById("index").innerHTML = `
    <h1>Decentralization and consumer welfare with substitutes or complements.</h1>
    <h3> <em> Review of Industrial Organization</em>, 2024, Volume 64, pages 449–469.</h3>
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
    <h3> <em>Review of Agricultural, Food and Environmental Studies, 2024, Volume 105, pages 371–391.</em></h3>
    <p><small>Draft link: <a href="https://doi.org/10.1007/s41130-024-00217-w"> https://doi.org/10.1007/s41130-024-00217-w </a></small></p>
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
    } else if (e.target.value === "demand-uncertainty") {
      document.getElementById("index").innerHTML = `
    <h1>Two part tariff, demand uncertainty and risk aversion: From theory to experimental evidence.</h1>
    <h4> with Olivier Bonroy and Alexis Garapin. </h3>
    <h3> <em>Economics Letters, Volume 247, February 2025.</em></h3>
    <p><small>Draft link: <a href="https://doi.org/10.1016/j.econlet.2025.112171"> https://doi.org/10.1016/j.econlet.2025.112171 </a></small></p>
    <br>
    <p> <strong> Abstract: </strong> In an uncertain demand environment, the per-unit price of a two-part tariff can have
insurance properties, insofar as it transfers risk from risk-averse downstream firms to
less risk averse upstream firms, and compensation properties insofar as it compensates
downstream firms for lessened attractiveness of trade. Both properties have opposite
effects such as the first one can increase double marginalization and the second one can
mitigate it. This paper provides experimental evidence of both properties.</p>
    <a href="./index.html"> [Back] </a>
    `;
    } 
  })
);
