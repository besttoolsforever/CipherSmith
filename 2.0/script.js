// PasswordGen_Max.js - Version 22.1 (Final Conditional Filter)

// A tiny collection of words for the "Memorable" mode. Serves as a fallback.
// Just a few to get you started. Feel free to add thousands more. Or don't. I'm just a comment.
const wordList_dev = [  "nebula", "photon", "hyper", "terra", "lunar", "solar", "galaxy", "cosmic", "velocity", "momentum",
    "dynamic", "atomic", "quantum", "neutron", "proton", "electron", "fusion", "gravity", "orbit", "celestial",
    "stardust", "blazar", "pulsar", "quasar", "ionize", "spectral", "thermal", "accel", "turbo", "zenith",
    "nadir", "apex", "vertex", "crystal", "prismatic", "luminous", "radiant", "infinity", "eternity", "abyss",
    "vivid", "chroma", "titanium", "carbon", "silicon", "neon", "argon", "krypton", "xenon", "helium",
    "hydrogen", "nitro", "oxide", "catalyst", "reactor", "generator", "accelerator", "synthetic", "digital",
    "neural", "algorithm", "binary", "encrypt", "decrypt", "fission", "particle", "wave", "frequency",
    "amplitude", "wavelength", "spectrum", "laser", "maser", "radio", "microwave", "infrared", "ultraviolet",
    "xray", "gamma", "beta", "alpha", "delta", "epsilon", "omega", "sigma", "lambda", "theta",
    "zeta", "psi", "phi", "charge", "magnetic", "electric", "voltage", "current", "resistance", "capacitor",
    "transistor", "diode", "resistor", "inductor", "circuit", "node", "loop", "path", "flow", "stream",
    "surge", "rush", "blaze", "spark", "ignite", "combust", "explode", "implode", "crash", "boom",
    "bang", "whiz", "zoom", "whirl", "twist", "spin", "revolve", "rotate", "twirl", "gyrate",
    "accelerate", "decelerate", "speed", "mach", "thrust", "propel", "impulse", "inertia", "mass", "density",
    "volume", "pressure", "vacuum", "void", "cosmos", "universe", "multiverse", "dimension", "portal", "wormhole",
    "blackhole", "singularity", "quark", "neutrino", "boson", "fermion", "hadron", "lepton", "muon", "gluon",
    "atom", "molecule", "compound", "element", "string", "membrane", "brane", "state", "superposition", "entanglement",
    "decoherence", "coherence", "interference", "diffraction", "refraction", "reflection", "absorption", "emission", "radiation", "radioactive",
    "decay", "half-life", "isotope", "ion", "plasma", "gas", "liquid", "solid", "bose", "einstein",
    "fermi", "dirac", "pauli", "hawking", "newton", "maxwell", "tesla", "edison", "volt", "ampere",
    "ohm", "watt", "joule", "kelvin", "celsius", "fahrenheit", "pascal", "hertz", "farad", "fly",
    "weber", "gauss", "oersted", "curie", "becquerel", "sievert", "gray", "roentgen", "dalton", "mine",
    "planck", "boltzmann", "rydberg", "stefan", "poise", "stokes", "angstrom", "parsec", "lightyear", "astronomical",
    "megaparsec", "hubble", "doppler", "redshift", "blueshift", "jerk", "snap", "crackle", "pop", "harmonic",
    "resonance", "oscillation", "vibration", "pendulum", "spring", "elastic", "plastic", "ductile", "brittle", "malleable",
    "conductivity", "resistivity", "superconductor", "semiconductor", "insulator", "conductor", "dielectric", "capacitance", "inductance", "impedance",
    "admittance", "susceptance", "reactance", "conductance", "energy", "power", "work", "force", "torque", "moment",
    "kinetic", "potential", "chemical", "nuclear", "gravitational", "mechanical", "sound", "light", "heat", "cold",
    "entropy", "enthalpy", "free", "gibbs", "helmholtz", "carnot", "efficiency", "engine", "refrigerator", "pump",
    "cycle", "otto", "diesel", "brayton", "rankine", "stirling", "thermodynamics", "zeroth", "first", "second",
    "third", "ideal", "real", "van", "waals", "equation", "braile", "charles", "beatles", "seek",
    "combined", "dalton", "henry", "raoult", "colligative", "osmosis", "diffusion", "effusion", "graham", "kinetic",
    "maxwell-boltzmann", "root", "mean", "square", "brownian", "viscosity", "viscous", "newtonian", "non-newtonian", "shear",
    "stress", "rate", "reynolds", "laminar", "turbulent", "bernoulli", "continuity", "venturi", "torricelli", "pascal",
    "archimedes", "buoyancy", "hydraulics", "pneumatics", "compressible", "incompressible", "supersonic", "subsonic", "transonic", "hypersonic",
    "shock", "sonic", "barrier", "aerodynamics", "hydrodynamics", "fluid", "boundary", "layer", "drag", "lift",
    "weight", "center", "pressure", "aerofoil", "airfoil", "wing", "flap", "aileron", "rudder", "elevator",
    "propeller", "turbine", "compressor", "combustor", "nozzle", "afterburner", "rocket", "missile", "jet", "turbojet",
    "turbofan", "turboprop", "ramjet", "scramjet", "vectoring", "vtol", "stol", "vstol", "helicopter", "autogyro",
    "drone", "uav", "satellite", "geostationary", "low", "medium", "high", "polar", "synchronous", "molniya",
    "tundra", "transfer", "hohmann", "bic", "assist", "lagrange", "spacecraft", "rover", "lander", "probe",
    "telescope", "observatory", "constellation", "star", "planet", "moon", "asteroid", "comet", "meteor", "meteorite",
    "meteoroid", "bolide", "fireball", "supernova", "hypernova", "neutron", "magnetar", "white", "red", "blue",
    "supergiant", "dwarf", "exoplanet", "gas", "ice", "terrestrial", "rogue", "binary", "multiple", "open",
    "globular", "cluster", "supercluster", "filament", "dark", "energy", "microwave", "inflation", "bang", "steady",
    "string", "m-theory", "quantum", "gravity", "loop", "causal", "dynamical", "triangulation", "theory", "everything",
    "grand", "unified", "standard", "supersymmetry", "oscillation", "higgs", "graviton", "phonon", "plasmon", "polaron",
    "exciton", "cooper", "bose-einstein", "degeneracy", "hall", "superfluidity", "superconductivity", "monopole", "anyon", "majorana",
    "weyl", "dirac", "neutronium", "strange", "quark-gluon", "plasma", "pulsar", "magnetar", "white", "black",
    "red", "brown", "tauri", "herbig-haro", "planetary", "region", "molecular", "dark", "reflection", "emission",
    "remnant", "wind", "accretion", "protoplanetary", "debris", "circumstellar", "proplyd", "exozodiacal", "kuiper", "oort",
    "scattered", "detached", "centaur", "trojan", "near-earth", "potentially", "hazardous", "shower", "leonids", "perseids",
    "geminids", "orionids", "taurids", "quadrantids", "ursids", "lyrids", "andromedids", "draconids", "eta", "alpha",
    "delta", "halley", "hale-bopp", "shoemaker-levy", "hyakutake", "ison", "neowise", "encke", "tempel-tuttle", "swift-tuttle",
    "giacobini-zinner", "holmes", "lovejoy", "pan-starrs", "mcnaught", "seki", "great", "long-period", "short-period", "hyperbolic",
    "parabolic", "elliptical", "circular", "eccentricity", "inclination", "ascending", "descending", "perihelion", "aphelion", "perigee",
    "apogee", "apsis", "sidereal", "synodic", "resonance", "roche", "hill", "sphere", "influence", "escape",
    "orbital", "hohmann", "bi-elliptic", "assist", "delta-v", "specific", "impulse", "thrust-to-weight", "mass", "ratio",
    "rocket", "equation", "staging", "multistage", "single-stage-to-orbit", "reusable", "launch", "vehicle", "expendable", "system",
    "pad", "window", "ascent", "trajectory", "reentry", "ablation", "heat", "shield", "parachute", "retrorocket",
    "soft", "landing", "hard", "docking", "rendezvous", "berthing", "spacewalk", "eva", "iva", "tethered",
    "untethered", "station", "iss", "tiangong", "mir", "skylab", "salyut", "shuttle", "soyuz", "dragon",
    "crew", "starliner", "orion", "apollo", "gemini", "mercury", "vostok", "voskhod", "shenzhou", "progress",
    "cygnus", "dream", "chaser", "starship", "falcon", "atlas", "delta", "ariane", "proton", "long",
    "march", "angara", "electron", "launcherone", "vega", "h-ii", "gslv", "pslv", "tourism", "suborbital",
    "orbital", "interplanetary", "interstellar", "intergalactic", "warp", "drive", "alcubierre", "wormhole", "hyperspace", "jump",
    "solar", "sail", "laser", "propulsion", "nuclear", "pulse", "ion", "thruster", "hall", "effect",
    "vasimr", "magnetoplasmadynamic", "electrodeless", "plasma", "fusion", "rocket", "antimatter", "bussard", "ramjet", "orion",
    "project", "daedalus", "longshot", "breakthrough", "starshot", "lightsail", "oumuamua", "voyager", "pioneer", "new",
    "horizons", "viking", "curiosity", "perseverance", "opportunity", "spirit", "sojourner", "zhurong", "chang'e", "yutu",
    "luna", "lunokhod", "module", "command", "service", "rover", "moonbase", "mars", "base", "colony",
    "terraforming", "biosphere", "habitat", "neill", "cylinder", "stanford", "torus", "bernal", "sphere", "dyson",
    "swarm", "matrioshka", "brain", "ringworld", "alderson", "disk", "kardashev", "scale", "type", "i",
    "ii", "iii", "iv", "v", "civilization", "extraterrestrial", "seti", "drake", "equation", "fermi",
    "paradox", "great", "filter", "anthropic", "principle", "panspermia", "directed", "exogenesis", "astrobiology", "extremophile",
    "tardigrade", "microorganism", "bacteria", "archaea", "eukaryote", "virus", "prion", "dna", "rna", "amino",
    "acid", "protein", "enzyme", "metabolism", "photosynthesis", "respiration", "fermentation", "glycolysis", "krebs", "cycle",
    "electron", "transport", "chain", "atp", "mitochondria", "chloroplast", "membrane", "wall", "cytoplasm", "nucleus",
    "ribosome", "endoplasmic", "reticulum", "golgi", "apparatus", "lysosome", "vacuole", "centriole", "cytoskeleton", "microtubule",
    "microfilament", "intermediate", "filament", "chromosome", "gene", "allele", "genotype", "phenotype", "mutation", "natural",
    "selection", "evolution", "speciation", "adaptation", "drift", "flow", "founder", "effect", "bottleneck", "hardy-weinberg",
    "population", "genetics", "phylogenetics", "cladistics", "taxonomy", "kingdom", "phylum", "class", "order", "family",
    "genus", "species", "binomial", "nomenclature", "linnaean", "classification", "domain", "protist", "fungus", "plant",
    "animal", "invertebrate", "vertebrate", "fish", "amphibian", "reptile", "bird", "mammal", "primate", "hominid",
    "homo", "sapiens", "neanderthal", "denisovan", "erectus", "habilis", "australopithecus", "paleolithic", "neolithic", "mesolithic",
    "bronze", "age", "iron", "industrial", "revolution", "information", "digital", "space", "anthropocene", "holocene",
    "pleistocene", "epoch", "era", "period", "eon", "geologic", "time", "scale", "stratigraphy", "paleontology",
    "fossil", "amber", "tar", "pit", "ice", "core", "sediment", "rock", "layer", "igneous",
    "sedimentary", "metamorphic", "plate", "tectonics", "continental", "drift", "pangaea", "laurasia", "gondwana", "subduction",
    "earthquake", "volcano", "magma", "lava", "pyroclastic", "flow", "tsunami", "richter", "scale", "mercalli",
    "seismograph", "epicenter", "hypocenter", "fault", "san", "andreas", "ring", "fire", "mid-ocean", "ridge",
    "rift", "valley", "hotspot", "hawaiian", "islands", "yellowstone", "supervolcano", "caldera", "geyser", "fumarole",
    "hydrothermal", "vent", "black", "smoker", "white", "mineral", "crystal", "gemstone", "diamond", "ruby",
    "sapphire", "emerald", "amethyst", "topaz", "opal", "quartz", "feldspar", "mica", "olivine", "pyroxene",
    "amphibole", "garnet", "bauxite", "hematite", "magnetite", "galena", "sphalerite", "halite", "gypsum", "calcite",
    "aragonite", "dolomite", "limestone", "marble", "slate", "schist", "gneiss", "granite", "basalt", "obsidian",
    "pumice", "sandstone", "shale", "conglomerate", "breccia", "coal", "oil", "natural", "gas", "fossil",
    "fuel", "renewable", "energy", "solar", "power", "wind", "hydro", "geothermal", "biomass", "biofuel",
    "nuclear", "fission", "reactor", "turbine", "generator", "transformer", "grid", "smart", "battery", "lith",
    "nebula", "photon", "hyper", "terra", "lunar", "solar", "galaxy", "cosmic", "velocity", "momentum", "dynamic",
    "atomic", "quantum", "neutron", "proton", "electron", "fusion", "gravity", "orbit", "celestial", "stardust",
    "blazar", "pulsar", "quasar", "ionize", "spectral", "thermal", "velocity", "accel", "turbo", "zenith", "nadir",
    "apex", "vertex", "crystal", "prismatic", "luminous", "radiant", "infinity", "eternity", "abyss", "vivid", "chroma",
    "lunar", "solar", "titanium", "carbon", "silicon", "neon", "argon", "krypton", "xenon", "helium", "hydrogen",
    "nitro", "oxide", "catalyst", "reactor", "generator", "accelerator", "synthetic", "digital", "neural", "quantum",
    "algorithm", "binary", "encrypt", "decrypt", "fusion", "fission", "particle", "wave", "frequency", "amplitude",
    "wavelength", "spectrum", "photon", "laser", "maser", "radio", "microwave", "infrared", "ultraviolet", "xray",
    "gamma", "beta", "alpha", "delta", "epsilon", "omega", "sigma", "lambda", "theta", "zeta", "psi", "phi", "omega",
    "charge", "magnetic", "electric", "voltage", "current", "resistance", "capacitor", "transistor", "diode",
    "resistor", "inductor", "circuit", "node", "loop", "path", "flow", "stream", "surge", "rush", "blaze", "spark",
    "ignite", "combust", "explode", "implode", "crash", "boom", "bang", "whiz", "zoom", "whirl", "twist", "spin",
    "orbit", "revolve", "rotate", "twirl", "gyrate", "accelerate", "decelerate", "velocity", "speed", "mach",
    "thrust", "propel", "impulse", "momentum", "inertia", "gravity", "mass", "density", "volume", "pressure",
    "vacuum", "void", "abyss", "cosmos", "universe", "multiverse", "dimension", "portal", "wormhole", "blackhole",
    "singularity", "eventhorizon", "quark", "neutrino", "boson", "fermion", "hadron", "lepton", "muon", "gluon",
    "photon", "electron", "proton", "neutron", "atom", "molecule", "compound", "element", "particle", "wave", "string",
    "membrane", "brane", "quantum", "state", "superposition", "entanglement", "decoherence", "coherence", "interference",
    "diffraction", "refraction", "reflection", "absorption", "emission", "radiation", "radioactive", "decay",
    "halflife", "isotope", "ion", "plasma", "gas", "liquid", "solid", "bose", "einstein", "fermi", "dirac", "pauli",
    "hawking", "newton", "maxwell", "tesla", "edison", "volt", "ampere", "ohm", "watt", "joule", "kelvin", "celsius",
    "fahrenheit", "pascal", "newton", "pascal", "hertz", "farad", "henry", "weber", "tesla", "gauss", "oersted", "curie",
    "becquerel", "sievert", "gray", "roentgen", "dalton", "avogadro", "planck", "boltzmann", "rydberg", "stefan", "ohm",
    "poise", "stokes", "angstrom", "parsec", "lightyear", "astronomicalunit", "parsec", "megaparsec", "hubble",
    "doppler", "redshift", "blueshift", "wavelength", "frequency", "amplitude", "velocity", "acceleration", "jerk",
    "snap", "crackle", "pop", "harmonic", "resonance", "oscillation", "vibration", "pendulum", "spring", "elastic",
    "plastic", "ductile", "brittle", "malleable", "conductivity", "resistivity", "superconductor", "semiconductor",
    "insulator", "conductor", "dielectric", "capacitance", "inductance", "impedance", "admittance", "susceptance",
    "reactance", "resistance", "conductance", "voltage", "current", "charge", "energy", "power", "work", "force",
    "torque", "moment", "inertia", "momentum", "impulse", "energy", "kinetic", "potential", "thermal", "electrical",
    "chemical", "nuclear", "gravitational", "elastic", "mechanical", "radiant", "sound", "light", "heat", "cold",
    "entropy", "enthalpy", "freeenergy", "gibbs", "helmholtz", "carnot", "efficiency", "work", "heatengine",
    "refrigerator", "heatpump", "carnot", "otto", "cycle", "brayton", "rankinecycle", "stirling", "thermodynamics",
    "zeroth", "firstlaw", "secondlaw", "thirdlaw", "ideal", "real", "vanderwaals", "equationofstate", "charleslaw",
    "dalton", "colligative", "osmosis", "diffusion", "effusion", "graham", "kinetic", "boltzman", "square", "theorymotion",
    "viscosity", "viscous", "newfluid", "nonfluid", "boltzmann", "redshift", "databricks", "hadoop", "yarn", "hive", "pig", 
    "hbase", "zookeeper", "oozie", "sqoop", "flume", "mahout", "ambari", "spark", "storm", "kafka", "couchbase", "redis", "elasticsearch", 
    "solr", "arangodb", "orientdb", "janusgraph", "titan", "dgraph", "timescaledb", "influxnow", "prometheus", "graphite", "grafana", "kibana", 
    "tableau", "powerbi", "looker", "metabase", "superset", "mode", "periscope", "chartio", "datastudio", "qlik", "microstrategy", "python", 
    "matlab", "excel", "airtable", "notion", "confluence", "asana", "monday", "smartsheet", "downup", "basecamp", "slack", "softteams", 
    "zoom", "code-based", "multivariate", "supersingularisogeny", "sidh", "kyber", "dilithium", "falcon", "ntru", "mceliece", "rainbow", 
    "sphincs", "bliss", "newhope",  "lac", "roundx", "saber", "playprime", "classical", "crystals", "bike", "hqc", "sike", "picnic", 
    "fullbetter", "frodokem", "ledacrypt", "dme", "rollo", "rqc", "threebears", "titanium",
"nebula", "photon", "hyper", "terra", "lunar", "solar", "galaxy", "cosmic", "velocity", "momentum",
    "dynamic", "atomic", "quantum", "neutron", "proton", "electron", "fusion", "gravity", "orbit", "celestial",
    "stardust", "blazar", "pulsar", "quasar", "ionize", "spectral", "thermal", "accel", "turbo", "zenith",
    "nadir", "apex", "vertex", "crystal", "prismatic", "luminous", "radiant", "infinity", "eternity", "abyss",
    "vivid", "chroma", "titanium", "carbon", "silicon", "neon", "argon", "krypton", "xenon", "helium",
    "hydrogen", "nitro", "oxide", "catalyst", "reactor", "generator", "accelerator", "synthetic", "digital",
    "neural", "algorithm", "binary", "encrypt", "decrypt", "fission", "particle", "wave", "frequency",
    "amplitude", "wavelength", "spectrum", "laser", "maser", "radio", "microwave", "infrared", "ultraviolet",
    "xray", "gamma", "beta", "alpha", "delta", "epsilon", "omega", "sigma", "lambda", "theta",
    "zeta", "psi", "phi", "charge", "magnetic", "electric", "voltage", "current", "resistance", "capacitor",
    "transistor", "diode", "resistor", "inductor", "circuit", "node", "loop", "path", "flow", "stream",
    "surge", "rush", "blaze", "spark", "ignite", "combust", "explode", "implode", "crash", "boom",
    "bang", "whiz", "zoom", "whirl", "twist", "spin", "revolve", "rotate", "twirl", "gyrate",
    "accelerate", "decelerate", "speed", "mach", "thrust", "propel", "impulse", "inertia", "mass", "density",
    "volume", "pressure", "vacuum", "void", "cosmos", "universe", "multiverse", "dimension", "portal", "wormhole",
    "blackhole", "singularity", "quark", "neutrino", "boson", "fermion", "hadron", "lepton", "muon", "gluon",
    "atom", "molecule", "compound", "element", "string", "membrane", "brane", "state", "superposition", "entanglement",
    "decoherence", "coherence", "interference", "diffraction", "refraction", "reflection", "absorption", "emission", "radiation", "radioactive",
    "decay", "half-life", "isotope", "ion", "plasma", "gas", "liquid", "solid", "bose", "einstein",
    "fermi", "dirac", "pauli", "hawking", "newton", "maxwell", "tesla", "edison", "volt", "ampere",
    "ohm", "watt", "joule", "kelvin", "celsius", "fahrenheit", "pascal", "hertz", "farad", "fly",
    "weber", "gauss", "oersted", "curie", "becquerel", "sievert", "gray", "roentgen", "dalton", "mine",
    "planck", "boltzmann", "rydberg", "stefan", "poise", "stokes", "angstrom", "parsec", "lightyear", "astronomical",
    "megaparsec", "hubble", "doppler", "redshift", "blueshift", "jerk", "snap", "crackle", "pop", "harmonic",
    "resonance", "oscillation", "vibration", "pendulum", "spring", "elastic", "plastic", "ductile", "brittle", "malleable",
    "conductivity", "resistivity", "superconductor", "semiconductor", "insulator", "conductor", "dielectric", "capacitance", "inductance", "impedance",
    "admittance", "susceptance", "reactance", "conductance", "energy", "power", "work", "force", "torque", "moment",
    "kinetic", "potential", "chemical", "nuclear", "gravitational", "mechanical", "sound", "light", "heat", "cold",
    "entropy", "enthalpy", "free", "gibbs", "helmholtz", "carnot", "efficiency", "engine", "refrigerator", "pump",
    "cycle", "otto", "diesel", "brayton", "rankine", "stirling", "thermodynamics", "zeroth", "first", "second",
    "third", "ideal", "real", "van", "waals", "equation", "braile", "charles", "beatles", "seek",
    "combined", "dalton", "henry", "raoult", "colligative", "osmosis", "diffusion", "effusion", "graham", "kinetic",
    "maxwell-boltzmann", "root", "mean", "square", "brownian", "viscosity", "viscous", "newtonian", "non-newtonian", "shear",
    "stress", "rate", "reynolds", "laminar", "turbulent", "bernoulli", "continuity", "venturi", "torricelli", "pascal",
    "archimedes", "buoyancy", "hydraulics", "pneumatics", "compressible", "incompressible", "supersonic", "subsonic", "transonic", "hypersonic",
    "shock", "sonic", "barrier", "aerodynamics", "hydrodynamics", "fluid", "boundary", "layer", "drag", "lift",
    "weight", "center", "pressure", "aerofoil", "airfoil", "wing", "flap", "aileron", "rudder", "elevator",
    "propeller", "turbine", "compressor", "combustor", "nozzle", "afterburner", "rocket", "missile", "jet", "turbojet",
    "turbofan", "turboprop", "ramjet", "scramjet", "vectoring", "vtol", "stol", "vstol", "helicopter", "autogyro",
    "drone", "uav", "satellite", "geostationary", "low", "medium", "high", "polar", "synchronous", "molniya",
    "tundra", "transfer", "hohmann", "bic", "assist", "lagrange", "spacecraft", "rover", "lander", "probe",
    "telescope", "observatory", "constellation", "star", "planet", "moon", "asteroid", "comet", "meteor", "meteorite",
    "meteoroid", "bolide", "fireball", "supernova", "hypernova", "neutron", "magnetar", "white", "red", "blue",
    "supergiant", "dwarf", "exoplanet", "gas", "ice", "terrestrial", "rogue", "binary", "multiple", "open",
    "globular", "cluster", "supercluster", "filament", "dark", "energy", "microwave", "inflation", "bang", "steady",
    "string", "m-theory", "quantum", "gravity", "loop", "causal", "dynamical", "triangulation", "theory", "everything",
    "grand", "unified", "standard", "supersymmetry", "oscillation", "higgs", "graviton", "phonon", "plasmon", "polaron",
    "exciton", "cooper", "bose-einstein", "degeneracy", "hall", "superfluidity", "superconductivity", "monopole", "anyon", "majorana",
    "weyl", "dirac", "neutronium", "strange", "quark-gluon", "plasma", "pulsar", "magnetar", "white", "black",
    "red", "brown", "tauri", "herbig-haro", "planetary", "region", "molecular", "dark", "reflection", "emission",
    "remnant", "wind", "accretion", "protoplanetary", "debris", "circumstellar", "proplyd", "exozodiacal", "kuiper", "oort",
    "scattered", "detached", "centaur", "trojan", "near-earth", "potentially", "hazardous", "shower", "leonids", "perseids",
    "geminids", "orionids", "taurids", "quadrantids", "ursids", "lyrids", "andromedids", "draconids", "eta", "alpha",
    "delta", "halley", "hale-bopp", "shoemaker-levy", "hyakutake", "ison", "neowise", "encke", "tempel-tuttle", "swift-tuttle",
    "giacobini-zinner", "holmes", "lovejoy", "pan-starrs", "mcnaught", "seki", "great", "long-period", "short-period", "hyperbolic",
    "parabolic", "elliptical", "circular", "eccentricity", "inclination", "ascending", "descending", "perihelion", "aphelion", "perigee",
    "apogee", "apsis", "sidereal", "synodic", "resonance", "roche", "hill", "sphere", "influence", "escape",
    "orbital", "hohmann", "bi-elliptic", "assist", "delta-v", "specific", "impulse", "thrust-to-weight", "mass", "ratio",
    "rocket", "equation", "staging", "multistage", "single-stage-to-orbit", "reusable", "launch", "vehicle", "expendable", "system",
    "pad", "window", "ascent", "trajectory", "reentry", "ablation", "heat", "shield", "parachute", "retrorocket",
    "soft", "landing", "hard", "docking", "rendezvous", "berthing", "spacewalk", "eva", "iva", "tethered",
    "untethered", "station", "iss", "tiangong", "mir", "skylab", "salyut", "shuttle", "soyuz", "dragon",
    "crew", "starliner", "orion", "apollo", "gemini", "mercury", "vostok", "voskhod", "shenzhou", "progress",
    "cygnus", "dream", "chaser", "starship", "falcon", "atlas", "delta", "ariane", "proton", "long",
    "march", "angara", "electron", "launcherone", "vega", "h-ii", "gslv", "pslv", "tourism", "suborbital",
    "orbital", "interplanetary", "interstellar", "intergalactic", "warp", "drive", "alcubierre", "wormhole", "hyperspace", "jump",
    "solar", "sail", "laser", "propulsion", "nuclear", "pulse", "ion", "thruster", "hall", "effect",
    "vasimr", "magnetoplasmadynamic", "electrodeless", "plasma", "fusion", "rocket", "antimatter", "bussard", "ramjet", "orion",
    "project", "daedalus", "longshot", "breakthrough", "starshot", "lightsail", "oumuamua", "voyager", "pioneer", "new",
    "horizons", "viking", "curiosity", "perseverance", "opportunity", "spirit", "sojourner", "zhurong", "chang'e", "yutu",
    "luna", "lunokhod", "module", "command", "service", "rover", "moonbase", "mars", "base", "colony",
    "terraforming", "biosphere", "habitat", "neill", "cylinder", "stanford", "torus", "bernal", "sphere", "dyson",
    "swarm", "matrioshka", "brain", "ringworld", "alderson", "disk", "kardashev", "scale", "type", "i",
    "ii", "iii", "iv", "v", "civilization", "extraterrestrial", "seti", "drake", "equation", "fermi",
    "paradox", "great", "filter", "anthropic", "principle", "panspermia", "directed", "exogenesis", "astrobiology", "extremophile",
    "tardigrade", "microorganism", "bacteria", "archaea", "eukaryote", "virus", "prion", "dna", "rna", "amino",
    "acid", "protein", "enzyme", "metabolism", "photosynthesis", "respiration", "fermentation", "glycolysis", "krebs", "cycle",
    "electron", "transport", "chain", "atp", "mitochondria", "chloroplast", "membrane", "wall", "cytoplasm", "nucleus",
    "ribosome", "endoplasmic", "reticulum", "golgi", "apparatus", "lysosome", "vacuole", "centriole", "cytoskeleton", "microtubule",
    "microfilament", "intermediate", "filament", "chromosome", "gene", "allele", "genotype", "phenotype", "mutation", "natural",
    "selection", "evolution", "speciation", "adaptation", "drift", "flow", "founder", "effect", "bottleneck", "hardy-weinberg",
    "population", "genetics", "phylogenetics", "cladistics", "taxonomy", "kingdom", "phylum", "class", "order", "family",
    "genus", "species", "binomial", "nomenclature", "linnaean", "classification", "domain", "protist", "fungus", "plant",
    "animal", "invertebrate", "vertebrate", "fish", "amphibian", "reptile", "bird", "mammal", "primate", "hominid",
    "homo", "sapiens", "neanderthal", "denisovan", "erectus", "habilis", "australopithecus", "paleolithic", "neolithic", "mesolithic",
    "bronze", "age", "iron", "industrial", "revolution", "information", "digital", "space", "anthropocene", "holocene",
    "pleistocene", "epoch", "era", "period", "eon", "geologic", "time", "scale", "stratigraphy", "paleontology",
    "fossil", "amber", "tar", "pit", "ice", "core", "sediment", "rock", "layer", "igneous",
    "sedimentary", "metamorphic", "plate", "tectonics", "continental", "drift", "pangaea", "laurasia", "gondwana", "subduction",
    "earthquake", "volcano", "magma", "lava", "pyroclastic", "flow", "tsunami", "richter", "scale", "mercalli",
    "seismograph", "epicenter", "hypocenter", "fault", "san", "andreas", "ring", "fire", "mid-ocean", "ridge",
    "rift", "valley", "hotspot", "hawaiian", "islands", "yellowstone", "supervolcano", "caldera", "geyser", "fumarole",
    "hydrothermal", "vent", "black", "smoker", "white", "mineral", "crystal", "gemstone", "diamond", "ruby",
    "sapphire", "emerald", "amethyst", "topaz", "opal", "quartz", "feldspar", "mica", "olivine", "pyroxene",
    "amphibole", "garnet", "bauxite", "hematite", "magnetite", "galena", "sphalerite", "halite", "gypsum", "calcite",
    "aragonite", "dolomite", "limestone", "marble", "slate", "schist", "gneiss", "granite", "basalt", "obsidian",
    "pumice", "sandstone", "shale", "conglomerate", "breccia", "coal", "oil", "natural", "gas", "fossil",
    "fuel", "renewable", "energy", "solar", "power", "wind", "hydro", "geothermal", "biomass", "biofuel",
    "nuclear", "fission", "reactor", "turbine", "generator", "transformer", "grid", "smart", "battery", "lith",
	"nebula", "photon", "hyper", "terra", "lunar", "solar", "galaxy", "cosmic", "velocity", "momentum", "dynamic",
	"atomic", "quantum", "neutron", "proton", "electron", "fusion", "gravity", "orbit", "celestial", "stardust",
	"blazar", "pulsar", "quasar", "ionize", "spectral", "thermal", "velocity", "accel", "turbo", "zenith", "nadir", 
	"apex", "vertex", "crystal", "prismatic", "luminous", "radiant", "infinity", "eternity", "abyss", "vivid", "chroma",
	"lunar", "solar", "titanium", "carbon", "silicon", "neon", "argon", "krypton", "xenon", "helium", "hydrogen",
	"nitro", "oxide", "catalyst", "reactor", "generator", "accelerator", "synthetic", "digital", "neural", "quantum",
	"algorithm", "binary", "encrypt", "decrypt", "fusion", "fission", "particle", "wave", "frequency", "amplitude", 
	"wavelength", "spectrum", "photon", "laser", "maser", "radio", "microwave", "infrared", "ultraviolet", "xray", 
	"gamma", "beta", "alpha", "delta", "epsilon", "omega", "sigma", "lambda", "theta", "zeta", "psi", "phi", "omega", 
	"charge", "magnetic", "electric", "voltage", "current", "resistance", "capacitor", "transistor", "diode", 
	"resistor", "inductor", "circuit", "node", "loop", "path", "flow", "stream", "surge", "rush", "blaze", "spark", 
	"ignite", "combust", "explode", "implode", "crash", "boom", "bang", "whiz", "zoom", "whirl", "twist", "spin", 
	"orbit", "revolve", "rotate", "twirl", "gyrate", "accelerate", "decelerate", "velocity", "speed", "mach", 
	"thrust", "propel", "impulse", "momentum", "inertia", "gravity", "mass", "density", "volume", "pressure", 
	"vacuum", "void", "abyss", "cosmos", "universe", "multiverse", "dimension", "portal", "wormhole", "blackhole", 
	"singularity", "eventhorizon", "quark", "neutrino", "boson", "fermion", "hadron", "lepton", "muon", "gluon", 
	"photon", "electron", "proton", "neutron", "atom", "molecule", "compound", "element", "particle", "wave", "string", 
	"membrane", "brane", "quantum", "state", "superposition", "entanglement", "decoherence", "coherence", "interference",
	"diffraction", "refraction", "reflection", "absorption", "emission", "radiation", "radioactive", "decay",
	"halflife", "isotope", "ion", "plasma", "gas", "liquid", "solid", "bose", "einstein", "fermi", "dirac", "pauli",
	"hawking", "newton", "maxwell", "tesla", "edison", "volt", "ampere", "ohm", "watt", "joule", "kelvin", "celsius",
	"fahrenheit", "pascal", "newton", "pascal", "hertz", "farad", "henry", "weber", "tesla", "gauss", "oersted", "curie",
	"becquerel", "sievert", "gray", "roentgen", "dalton", "avogadro", "planck", "boltzmann", "rydberg", "stefan", "ohm",
	"poise", "stokes", "angstrom", "parsec", "lightyear", "astronomicalunit", "parsec", "megaparsec", "hubble", 
	"doppler", "redshift", "blueshift", "wavelength", "frequency", "amplitude", "velocity", "acceleration", "jerk", 
	"snap", "crackle", "pop", "harmonic", "resonance", "oscillation", "vibration", "pendulum", "spring", "elastic", 
	"plastic", "ductile", "brittle", "malleable", "conductivity", "resistivity", "superconductor", "semiconductor", 
	"insulator", "conductor", "dielectric", "capacitance", "inductance", "impedance", "admittance", "susceptance", 
	"reactance", "resistance", "conductance", "voltage", "current", "charge", "energy", "power", "work", "force", 
	"torque", "moment", "inertia", "momentum", "impulse", "energy", "kinetic", "potential", "thermal", "electrical", 
	"chemical", "nuclear", "gravitational", "elastic", "mechanical", "radiant", "sound", "light", "heat", "cold", 
	"entropy", "enthalpy", "freeenergy", "gibbs", "helmholtz", "carnot", "efficiency", "work", "heatengine", 
	"refrigerator", "heatpump", "carnot", "otto", "cycle", "brayton", "rankinecycle", "stirling", "thermodynamics",
	"zeroth", "firstlaw", "secondlaw", "thirdlaw", "ideal", "real", "vanderwaals", "equationofstate", "charleslaw", 
	"dalton", "colligative", "osmosis", "diffusion", "effusion", "graham", "kinetic", "boltzman", "square", "theorymotion", 
    "viscosity", "viscous", "newfluid", "nonfluid", "boltzmann", "redshift", "databricks", "hadoop", "yarn", "hive", "pig", 
    "hbase", "zookeeper", "oozie", "sqoop", "flume", "mahout", "ambari", "spark", "storm", "kafka", "couchbase", "redis", 
    "elasticsearch", "solr", "arangodb", "orientdb", "janusgraph", "titan", "dgraph", "timescaledb", "influxnow", "prometheus", 
    "graphite", "grafana", "kibana", "tableau", "powerbi", "looker", "metabase", "superset", "mode", "periscope", "chartio", "datastudio", 
    "qlik", "microstrategy", "python", "matlab", "excel", "airtable", "notion", "confluence", "asana", "monday", "smartsheet", "downup", 
    "basecamp", "slack", "softteams", "zoom", "code-based", "multivariate", "supersingularisogeny", "sidh", "kyber", "dilithium", "falcon", 
    "ntru", "mceliece", "rainbow", "sphincs", "bliss", "newhope",  "lac", "roundx", "saber", "playprime", "classical", "crystals", "bike", 
    "hqc", "sike", "picnic", "fullbetter", "frodokem", "ledacrypt", "dme", "rollo", "rqc", "threebears", "titanium",
	"ringoffire", "hydrothermalvent", "pyroclasticflow", "continentaldrift", "platetectonics", "bronzeage", "golgiapparatus", "krebscycle", 
    "aminoacid", "newhorizons", "halleffect", "longmarch", "dreamchaser", "naturalgas", "sanandreas", "rootmeansquare", "halflife",   
    ];

// --- GOOGLE 10000 WORDLIST INTEGRATION ---
let wordList = wordList_dev;
const WORDLIST_URL = 'https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english-usa.txt';

/**
 * Fetches the wordlist from the specified URL.
 * If it fails, it gracefully falls back to the small developer list.
 */
async function fetchWordList() {
    console.log('Fetching wordlist...');
    try {
        const response = await fetch(WORDLIST_URL);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const text = await response.text();
        const fullWordList = text.split('\n').filter(word => word.trim() !== '');
        wordList = fullWordList;
        console.log(`Successfully loaded ${wordList.length} words from the new wordlist.`);
    } catch (error) {
        console.error('Failed to fetch the new wordlist. Falling back to the short developer list.', error);
        wordList = wordList_dev;
    }
}


// --- HELPER MINIONS ---
// Small functions that do the actual hard work while the main function takes all the credit.

/**
 * Generates a cryptographically secure random integer.
 * @param {number} max - The exclusive upper bound for the random number.
 * @returns {number} A secure random integer.
 */
function getSecureRandomInt(max) {
    if (max <= 0 || !Number.isInteger(max)) return 0;
    const randomValues = new Uint32Array(1);
    window.crypto.getRandomValues(randomValues);
    const max_uint32 = 0xFFFFFFFF;
    const range = max_uint32 - (max_uint32 % max);
    if (randomValues[0] >= range) {
        return getSecureRandomInt(max);
    }
    return randomValues[0] % max;
}

/**
 * Grabs a specified number of random characters from a given string.
 * @param {string} chars - The character set to pull from (e.g., "abcde").
 * @param {number} count - How many characters you want.
 * @returns {string} A string of random characters.
 */
function getRandomChars(chars, count) {
    if (count <= 0) return '';
    let result = '';
    // A classic loop. It's old, but it works. Unlike my last relationship.
    for (let i = 0; i < count; i++) {
        result += chars.charAt(getSecureRandomInt(chars.length));
    }
    return result;
}

/**
 * Shuffles an array. Not emotionally, just the order of its elements.
 * Uses the Fisher-Yates algorithm, because smart people already solved this problem.
 * @param {Array} array - The array to be shuffled.
 * @returns {Array} The same array, but now its life is all mixed up.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = getSecureRandomInt(i + 1);
        [array[i], array[j]] = [array[j], array[i]]; // A bit of fancy array destructuring.
    }
    return array;
}

/**
 * Builds a string of words from the wordList to a target length. (Original Logic)
 * @param {number} targetLength - The desired length of the final word block.
 * @returns {string} A string of concatenated words.
 */
function makeWordBlock(targetLength) {
    if (targetLength <= 0 || wordList.length === 0) return '';
    let memorableBlock = '';
    while (memorableBlock.length < targetLength) {
        memorableBlock += wordList[getSecureRandomInt(wordList.length)];
    }
    return memorableBlock.slice(0, targetLength);
}

/**
 * Replaces a character at a specific index in a string. A surgical strike.
 * @param {string} string - The original string.
 * @param {number} index - The position of the character to replace.
 * @param {string} replacement - The new character.
 * @returns {string} The modified string.
 */
function replaceAt(string, index, replacement) {
    return string.substring(0, index) + replacement + string.substring(index + 1);
}

/**
 * Applies a very specific, almost superstitious, capitalization filter to a password. (Original Logic)
 * @param {string} password - The password to be filtered.
 * @returns {string} The password with its newfound capital letters.
 */
function applyUppercaseFilter(password) {
    let result = password;
    let indices = [];
    for (let i = 0; i < password.length; i++) {
        if (password[i].match(/[a-z]/)) {
            indices.push(i);
        }
    }
    if (indices.length > 0) {
        let placeUppercaseAtStart = getSecureRandomInt(2) === 0;
        const charsToCapitalize = Math.min(indices.length, 2);
        if (placeUppercaseAtStart) {
            for (let i = 0; i < charsToCapitalize; i++) {
                result = replaceAt(result, indices[i], password[indices[i]].toUpperCase());
            }
        } else {
            for (let i = 0; i < charsToCapitalize; i++) {
                const targetIndex = indices[indices.length - 1 - i];
                result = replaceAt(result, targetIndex, password[targetIndex].toUpperCase());
            }
        }
    }
    return result;
}

/**
 * Inverts the case of letters in a string (aBc -> AbC), leaving other characters untouched.
 * @param {string} text - The input string.
 * @returns {string} The string with its letter case inverted.
 */
function swapCaseFilter(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char >= 'a' && char <= 'z') {
            result += char.toUpperCase();
        } else if (char >= 'A' && char <= 'Z') {
            result += char.toLowerCase();
        } else {
            result += char;
        }
    }
    return result;
}

/**
 * Calculates how many symbols a password should have based on its length. (Original Logic)
 * @param {number} length - The total length of the password.
 * @returns {number} The suggested number of symbols.
 */
function calculateSpecialCharCount(length) {
    if (length >= 41) return 6;
    if (length >= 29) return 5;
    if (length >= 17) return 4;
    if (length >= 10) return 3;
    if (length >= 6) return 2;
    return 1;
}

// --- SOPHISTICATED STRENGTH INDICATOR ---
function updatePasswordStrength(password) {
    const strengthBar = document.getElementById('strengthBar');
    const strengthFeedback = document.getElementById('strengthFeedback');
    const strengthTime = document.getElementById('strengthTime');
    if (typeof zxcvbn === 'undefined') {
        strengthFeedback.textContent = 'Strength meter unavailable.';
        return;
    }
    if (!password || password.startsWith('Select an option')) {
        strengthBar.style.width = '0%';
        strengthFeedback.textContent = '';
        strengthTime.textContent = '';
        strengthBar.className = 'strength-bar';
        return;
    }
    const result = zxcvbn(password);
    const score = result.score;
    const feedbackText = result.feedback.warning || (result.feedback.suggestions && result.feedback.suggestions[0]) || "Strong password";
    const crackTime = result.crack_times_display.offline_slow_hashing_1e4_per_second;
    const timeText = `Estimated time to crack: ${crackTime}`;
    const widthPercentage = (score / 4) * 100;
    strengthBar.style.width = widthPercentage + '%';
    strengthBar.className = 'strength-bar';
    strengthBar.classList.add(`strength-${score}`);
    strengthFeedback.textContent = feedbackText;
    strengthTime.textContent = timeText;
}

// --- THE GRAND MASTER FUNCTIONS ---

/**
 * Generates a random character password.
 * @returns {string} The generated random password.
 */
function generateRandomPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%*()_+<>?';
    let passwordChars = [];
    let charPool = '';
    if (includeLowercase) charPool += lowerCaseLetters;
    if (includeUppercase) charPool += upperCaseLetters;
    if (includeNumbers) charPool += numbers;
    if (includeSymbols) charPool += symbols;
    if (charPool === '') return 'Select an option.';
    if (includeLowercase) passwordChars.push(getRandomChars(lowerCaseLetters, 1));
    if (includeUppercase) passwordChars.push(getRandomChars(upperCaseLetters, 1));
    if (includeNumbers) passwordChars.push(getRandomChars(numbers, 1));
    if (includeSymbols) passwordChars.push(getRandomChars(symbols, 1));
    const remainingLength = length - passwordChars.length;
    if (remainingLength > 0) {
        passwordChars.push(getRandomChars(charPool, remainingLength));
    }
    let finalPassword = passwordChars.join('').split('');
    shuffleArray(finalPassword);
    return finalPassword.join('');
}

/**
 * Generates a memorable password using the original block-based logic.
 * @returns {string} The generated memorable password.
 */
function generateMemorablePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    const numbers = '0123456789';
    const symbols = '!@#$%*()_+<>?';
    const lettersActive = includeUppercase || includeLowercase;
    let sizes = { letters: 0, numbers: 0, symbols: 0 };

    if (includeSymbols) sizes.symbols = calculateSpecialCharCount(length);
    if (includeNumbers) sizes.numbers = Math.floor(length * 0.2);
    let currentTotal = sizes.symbols + sizes.numbers;
    if (lettersActive) {
        sizes.letters = length - currentTotal;
    } else if (currentTotal < length) {
        let remainder = length - currentTotal;
        if (includeNumbers && includeSymbols) {
            sizes.numbers += Math.ceil(remainder / 2);
            sizes.symbols += Math.floor(remainder / 2);
        } else if (includeNumbers) {
            sizes.numbers += remainder;
        } else if (includeSymbols) {
            sizes.symbols += remainder;
        }
    }
    let finalTotal = sizes.letters + sizes.numbers + sizes.symbols;
    if (finalTotal !== length) {
        if (lettersActive) sizes.letters += length - finalTotal;
        else if (includeNumbers) sizes.numbers += length - finalTotal;
        else if (includeSymbols) sizes.symbols += length - finalTotal;
    }

    let charGroups = [];
    if (lettersActive && sizes.letters > 0) {
        let letterBlock = makeWordBlock(sizes.letters);
        if (includeUppercase && !includeLowercase) {
            letterBlock = letterBlock.toUpperCase();
        } else if (includeUppercase) {
            letterBlock = applyUppercaseFilter(letterBlock);
        }
        charGroups.push(letterBlock);
    }
    if (includeNumbers && sizes.numbers > 0) {
        charGroups.push(getRandomChars(numbers, sizes.numbers));
    }
    if (includeSymbols && sizes.symbols > 0) {
        charGroups.push(getRandomChars(symbols, sizes.symbols));
    }
    shuffleArray(charGroups);
    return charGroups.join('');
}


// --- PAGE CONTROL FUNCTIONS ---

function generatePasswords() {
    const isPassphraseMode = document.getElementById('memorableCheckbox').checked;
    const serialCount = parseInt(document.getElementById('serialCount').value) || 1;
    let passwords = [];

    const options = {
        length: parseInt(document.getElementById('lengthSlider').value),
        includeUppercase: document.getElementById('includeUppercase').checked,
        includeLowercase: document.getElementById('includeLowercase').checked,
        includeNumbers: document.getElementById('includeNumbers').checked,
        includeSymbols: document.getElementById('includeSymbols').checked
    };
    
    if (!options.includeUppercase && !options.includeLowercase && !options.includeNumbers && !options.includeSymbols) {
        document.getElementById('generatedPassword').textContent = 'Select an option.';
        updatePasswordStrength(null);
        return;
    }

    for (let i = 0; i < serialCount; i++) {
        let password;
        if (isPassphraseMode) {
            password = generateMemorablePassword(
                options.length, options.includeUppercase, options.includeLowercase,
                options.includeNumbers, options.includeSymbols
            );
        } else {
            password = generateRandomPassword(
                options.length, options.includeUppercase, options.includeLowercase,
                options.includeNumbers, options.includeSymbols
            );
        }

        // --- FINAL CONDITIONAL FILTER ---
        // With a 50% chance, and ONLY if both case options are active,
        // invert the case of all letters in the final password.
        if (options.includeUppercase && options.includeLowercase && getSecureRandomInt(2) === 0) {
            password = swapCaseFilter(password);
        }

        passwords.push(password);
    }
    
    const finalOutput = passwords.join('\n');
    document.getElementById('generatedPassword').textContent = finalOutput;
    updatePasswordStrength(passwords[0]);
}

function copyPasswords() {
    const passwordText = document.getElementById('generatedPassword').textContent;
    if (passwordText && !passwordText.startsWith('Select an option')) {
        navigator.clipboard.writeText(passwordText).then(() => {
            alert("Passwords copied to clipboard! Remember: You don't choose the password. The password chooses the user. ✨");
        });
    }
}

function syncValue(element1, element2) {
    element1.addEventListener('input', () => { element2.value = element1.value; });
    element2.addEventListener('input', () => { element1.value = element2.value; });
}

function pg_increment(inputId) {
    const input = document.getElementById(inputId);
    if (parseInt(input.value) < parseInt(input.max)) {
        input.value = parseInt(input.value) + 1;
        input.dispatchEvent(new Event('input'));
    }
}

function pg_decrement(inputId) {
    const input = document.getElementById(inputId);
    if (parseInt(input.value) > parseInt(input.min)) {
        input.value = parseInt(input.value) - 1;
        input.dispatchEvent(new Event('input'));
    }
}

// Fetch the wordlist when the page content has loaded.

document.addEventListener('DOMContentLoaded', fetchWordList);
