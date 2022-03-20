csv_loc =
  "https://raw.githubusercontent.com/mzashin/HW_F21DV/main/CourseProject/assets/Exercises/Lab3/dataset/owid-covid-data.csv";

const parseTime = d3.timeParse("%Y-%m-%d");

function fetch_country_stats(csv_loc, country) {
  stats = d3.csv(csv_loc).then(function (data) {
    data.forEach(function (d) {
      d.date = parseTime(d.date);
      d.total_cases = +d.total_cases;
      d.new_cases = +d.new_cases;
      d.new_cases_smoothed = +d.new_cases_smoothed;
      d.total_deaths = +d.total_deaths;
      d.new_deaths = +d.new_deaths;
      d.new_deaths_smoothed = +d.new_deaths_smoothed;
      d.total_cases_per_million = +d.total_cases_per_million;
      d.new_cases_per_million = +d.new_cases_per_million;
      d.new_cases_smoothed_per_million = +d.new_cases_smoothed_per_million;
      d.total_deaths_per_million = +d.total_deaths_per_million;
      d.new_deaths_per_million = +d.new_deaths_per_million;
      d.new_deaths_smoothed_per_million = +d.new_deaths_smoothed_per_million;
      d.reproduction_rate = +d.reproduction_rate;
      d.icu_patients = +d.icu_patients;
      d.icu_patients_per_million = +d.icu_patients_per_million;
      d.hosp_patients = +d.hosp_patients;
      d.hosp_patients_per_million = +d.hosp_patients_per_million;
      d.weekly_icu_admissions = +d.weekly_icu_admissions;
      d.weekly_icu_admissions_per_million =
        +d.weekly_icu_admissions_per_million;
      d.weekly_hosp_admissions = +d.weekly_hosp_admissions;
      d.weekly_hosp_admissions_per_million =
        +d.weekly_hosp_admissions_per_million;
      d.total_tests = +d.total_tests;
      d.new_tests = +d.new_tests;
      d.total_tests_per_thousand = +d.total_tests_per_thousand;
      d.new_tests_per_thousand = +d.new_tests_per_thousand;
      d.new_tests_smoothed = +d.new_tests_smoothed;
      d.new_tests_smoothed_per_thousand = +d.new_tests_smoothed_per_thousand;
      d.positive_rate = +d.positive_rate;
      d.tests_per_case = +d.tests_per_case;
      d.tests_units = +d.tests_units;
      d.total_vaccinations = +d.total_vaccinations;
      d.people_vaccinated = +d.people_vaccinated;
      d.people_fully_vaccinated = +d.people_fully_vaccinated;
      d.total_boosters = +d.total_boosters;
      d.new_vaccinations = +d.new_vaccinations;
      d.new_vaccinations_smoothed = +d.new_vaccinations_smoothed;
      d.total_vaccinations_per_hundred = +d.total_vaccinations_per_hundred;
      d.people_vaccinated_per_hundred = +d.people_vaccinated_per_hundred;
      d.people_fully_vaccinated_per_hundred =
        +d.people_fully_vaccinated_per_hundred;
      d.total_boosters_per_hundred = +d.total_boosters_per_hundred;
      d.new_vaccinations_smoothed_per_million =
        +d.new_vaccinations_smoothed_per_million;
      d.new_people_vaccinated_smoothed = +d.new_people_vaccinated_smoothed;
      d.new_people_vaccinated_smoothed_per_hundred =
        +d.new_people_vaccinated_smoothed_per_hundred;
      d.stringency_index = +d.stringency_index;
      d.population = +d.population;
      d.population_density = +d.population_density;
      d.median_age = +d.median_age;
      d.aged_65_older = +d.aged_65_older;
      d.aged_70_older = +d.aged_70_older;
      d.gdp_per_capita = +d.gdp_per_capita;
      d.extreme_poverty = +d.extreme_poverty;
      d.cardiovasc_death_rate = +d.cardiovasc_death_rate;
      d.diabetes_prevalence = +d.diabetes_prevalence;
      d.female_smokers = +d.female_smokers;
      d.male_smokers = +d.male_smokers;
      d.handwashing_facilities = +d.handwashing_facilities;
      d.hospital_beds_per_thousand = +d.hospital_beds_per_thousand;
      d.life_expectancy = +d.life_expectancy;
      d.human_development_index = +d.human_development_index;
      d.excess_mortality_cumulative_absolute =
        +d.excess_mortality_cumulative_absolute;
      d.excess_mortality_cumulative = +d.excess_mortality_cumulative;
      d.excess_mortality = +d.excess_mortality;
      d.excess_mortality_cumulative_per_million =
        +d.excess_mortality_cumulative_per_million;
    });

    //var grouped_data = d3.group(data, d => d.name)

    console.log(data);

    total_cases = d3.sum(
      //data.filter(d => d.date.getFullYear() === 2017),
      data.filter((d) => d.location == "China"),
      (d) => d.total_cases
    );

    //location_sel = 'India';
    location_sel = country;
    total_cases = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.total_cases
    );
    new_cases = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.new_cases
    );
    new_cases_smoothed = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.new_cases_smoothed
    );
    total_deaths = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.total_deaths
    );
    new_deaths = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.new_deaths
    );
    new_deaths_smoothed = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.new_deaths_smoothed
    );
    total_cases_per_million = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.total_cases_per_million
    );
    new_cases_per_million = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.new_cases_per_million
    );
    new_cases_smoothed_per_million = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.new_cases_smoothed_per_million
    );
    total_deaths_per_million = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.total_deaths_per_million
    );
    new_deaths_per_million = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.new_deaths_per_million
    );
    new_deaths_smoothed_per_million = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.new_deaths_smoothed_per_million
    );
    reproduction_rate = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.reproduction_rate
    );
    icu_patients = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.icu_patients
    );
    icu_patients_per_million = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.icu_patients_per_million
    );
    hosp_patients = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.hosp_patients
    );
    hosp_patients_per_million = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.hosp_patients_per_million
    );
    weekly_icu_admissions = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.weekly_icu_admissions
    );
    weekly_icu_admissions_per_million = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.weekly_icu_admissions_per_million
    );
    weekly_hosp_admissions = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.weekly_hosp_admissions
    );
    weekly_hosp_admissions_per_million = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.weekly_hosp_admissions_per_million
    );
    total_tests = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.total_tests
    );
    new_tests = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.new_tests
    );
    total_tests_per_thousand = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.total_tests_per_thousand
    );
    new_tests_per_thousand = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.new_tests_per_thousand
    );
    new_tests_smoothed = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.new_tests_smoothed
    );
    new_tests_smoothed_per_thousand = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.new_tests_smoothed_per_thousand
    );
    positive_rate = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.positive_rate
    );
    tests_per_case = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.tests_per_case
    );
    tests_units = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.tests_units
    );
    total_vaccinations = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.total_vaccinations
    );
    people_vaccinated = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.people_vaccinated
    );
    people_fully_vaccinated = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.people_fully_vaccinated
    );
    total_boosters = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.total_boosters
    );
    new_vaccinations = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.new_vaccinations
    );
    new_vaccinations_smoothed = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.new_vaccinations_smoothed
    );
    total_vaccinations_per_hundred = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.total_vaccinations_per_hundred
    );
    people_vaccinated_per_hundred = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.people_vaccinated_per_hundred
    );
    people_fully_vaccinated_per_hundred = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.people_fully_vaccinated_per_hundred
    );
    total_boosters_per_hundred = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.total_boosters_per_hundred
    );
    new_vaccinations_smoothed_per_million = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.new_vaccinations_smoothed_per_million
    );
    new_people_vaccinated_smoothed = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.new_people_vaccinated_smoothed
    );
    new_people_vaccinated_smoothed_per_hundred = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.new_people_vaccinated_smoothed_per_hundred
    );
    stringency_index = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.stringency_index
    );
    //population = d3.sum(
    //  data.filter((d) => d.location == location_sel),
    //  (d) => d.population
    //);
    population_density = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.population_density
    );
    median_age = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.median_age
    );
    aged_65_older = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.aged_65_older
    );
    aged_70_older = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.aged_70_older
    );
    gdp_per_capita = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.gdp_per_capita
    );
    extreme_poverty = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.extreme_poverty
    );
    cardiovasc_death_rate = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.cardiovasc_death_rate
    );
    diabetes_prevalence = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.diabetes_prevalence
    );
    female_smokers = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.female_smokers
    );
    male_smokers = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.male_smokers
    );
    handwashing_facilities = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.handwashing_facilities
    );
    hospital_beds_per_thousand = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.hospital_beds_per_thousand
    );
    life_expectancy = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.life_expectancy
    );
    human_development_index = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.human_development_index
    );
    excess_mortality_cumulative_absolute = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.excess_mortality_cumulative_absolute
    );
    excess_mortality_cumulative = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.excess_mortality_cumulative
    );
    excess_mortality = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.excess_mortality
    );
    excess_mortality_cumulative_per_million = d3.sum(
      data.filter((d) => d.location == location_sel),
      (d) => d.excess_mortality_cumulative_per_million
    );

    var stats = [];
    var jsonData = {};
    jsonData["key"] = "total_cases";
    jsonData["value"] = total_cases;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "new_cases";
    jsonData["value"] = new_cases;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "new_cases_smoothed";
    jsonData["value"] = new_cases_smoothed;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "total_deaths";
    jsonData["value"] = total_deaths;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "new_deaths";
    jsonData["value"] = new_deaths;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "new_deaths_smoothed";
    jsonData["value"] = new_deaths_smoothed;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "total_cases_per_million";
    jsonData["value"] = total_cases_per_million;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "new_cases_per_million";
    jsonData["value"] = new_cases_per_million;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "new_cases_smoothed_per_million";
    jsonData["value"] = new_cases_smoothed_per_million;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "total_deaths_per_million";
    jsonData["value"] = total_deaths_per_million;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "new_deaths_per_million";
    jsonData["value"] = new_deaths_per_million;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "new_deaths_smoothed_per_million";
    jsonData["value"] = new_deaths_smoothed_per_million;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "reproduction_rate";
    jsonData["value"] = reproduction_rate;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "icu_patients";
    jsonData["value"] = icu_patients;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "icu_patients_per_million";
    jsonData["value"] = icu_patients_per_million;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "hosp_patients";
    jsonData["value"] = hosp_patients;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "hosp_patients_per_million";
    jsonData["value"] = hosp_patients_per_million;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "weekly_icu_admissions";
    jsonData["value"] = weekly_icu_admissions;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "weekly_icu_admissions_per_million";
    jsonData["value"] = weekly_icu_admissions_per_million;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "weekly_hosp_admissions";
    jsonData["value"] = weekly_hosp_admissions;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "weekly_hosp_admissions_per_million";
    jsonData["value"] = weekly_hosp_admissions_per_million;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "total_tests";
    jsonData["value"] = total_tests;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "new_tests";
    jsonData["value"] = new_tests;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "total_tests_per_thousand";
    jsonData["value"] = total_tests_per_thousand;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "new_tests_per_thousand";
    jsonData["value"] = new_tests_per_thousand;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "new_tests_smoothed";
    jsonData["value"] = new_tests_smoothed;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "new_tests_smoothed_per_thousand";
    jsonData["value"] = new_tests_smoothed_per_thousand;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "positive_rate";
    jsonData["value"] = positive_rate;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "tests_per_case";
    jsonData["value"] = tests_per_case;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "tests_units";
    jsonData["value"] = tests_units;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "total_vaccinations";
    jsonData["value"] = total_vaccinations;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "people_vaccinated";
    jsonData["value"] = people_vaccinated;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "people_fully_vaccinated";
    jsonData["value"] = people_fully_vaccinated;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "total_boosters";
    jsonData["value"] = total_boosters;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "new_vaccinations";
    jsonData["value"] = new_vaccinations;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "new_vaccinations_smoothed";
    jsonData["value"] = new_vaccinations_smoothed;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "total_vaccinations_per_hundred";
    jsonData["value"] = total_vaccinations_per_hundred;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "people_vaccinated_per_hundred";
    jsonData["value"] = people_vaccinated_per_hundred;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "people_fully_vaccinated_per_hundred";
    jsonData["value"] = people_fully_vaccinated_per_hundred;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "total_boosters_per_hundred";
    jsonData["value"] = total_boosters_per_hundred;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "new_vaccinations_smoothed_per_million";
    jsonData["value"] = new_vaccinations_smoothed_per_million;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "new_people_vaccinated_smoothed";
    jsonData["value"] = new_people_vaccinated_smoothed;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "new_people_vaccinated_smoothed_per_hundred";
    jsonData["value"] = new_people_vaccinated_smoothed_per_hundred;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "stringency_index";
    jsonData["value"] = stringency_index;
    stats.push(jsonData);
    var jsonData = {};
    //jsonData["key"] = "population";
    //jsonData["value"] = population;
    //stats.push(jsonData);
    //var jsonData = {};
    jsonData["key"] = "population_density";
    jsonData["value"] = population_density;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "median_age";
    jsonData["value"] = median_age;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "aged_65_older";
    jsonData["value"] = aged_65_older;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "aged_70_older";
    jsonData["value"] = aged_70_older;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "gdp_per_capita";
    jsonData["value"] = gdp_per_capita;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "extreme_poverty";
    jsonData["value"] = extreme_poverty;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "cardiovasc_death_rate";
    jsonData["value"] = cardiovasc_death_rate;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "diabetes_prevalence";
    jsonData["value"] = diabetes_prevalence;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "female_smokers";
    jsonData["value"] = female_smokers;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "male_smokers";
    jsonData["value"] = male_smokers;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "handwashing_facilities";
    jsonData["value"] = handwashing_facilities;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "hospital_beds_per_thousand";
    jsonData["value"] = hospital_beds_per_thousand;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "life_expectancy";
    jsonData["value"] = life_expectancy;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "human_development_index";
    jsonData["value"] = human_development_index;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "excess_mortality_cumulative_absolute";
    jsonData["value"] = excess_mortality_cumulative_absolute;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "excess_mortality_cumulative";
    jsonData["value"] = excess_mortality_cumulative;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "excess_mortality";
    jsonData["value"] = excess_mortality;
    stats.push(jsonData);
    var jsonData = {};
    jsonData["key"] = "excess_mortality_cumulative_per_million";
    jsonData["value"] = excess_mortality_cumulative_per_million;
    stats.push(jsonData);
    var jsonData = {};

    console.log("stats", stats);
    return stats;
  });
  return stats;
}
