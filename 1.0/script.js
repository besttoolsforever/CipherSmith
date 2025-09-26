// PasswordGen_Max.js - Version 16.0 (Full English Translation & Cleanup)

// A tiny collection of words for the "Memorable" mode.
// Just a few to get you started. Feel free to add thousands more. Or don't. I'm just a comment.
const wordList = [
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
    "dalton", "colligative", "osmosis", "diffusion", "effusion", "graham", "kinetic", "boltzman", "square", "theorymotion", "viscosity", "viscous", "newfluid", "nonfluid", "boltzmann", "redshift", "databricks", "hadoop", "yarn", "hive", "pig", "hbase", "zookeeper", "oozie", "sqoop", "flume", "mahout", "ambari", "spark", "storm", "kafka", "couchbase", "redis", "elasticsearch", "solr", "arangodb", "orientdb", "janusgraph", "titan", "dgraph", "timescaledb", "influxnow", "prometheus", "graphite", "grafana", "kibana", "tableau", "powerbi", "looker", "metabase", "superset", "mode", "periscope", "chartio", "datastudio", "qlik", "microstrategy", "python", "matlab", "excel", "airtable", "notion", "confluence", "asana", "monday", "smartsheet", "downup", "basecamp", "slack", "softteams", "zoom", "code-based", "multivariate", "supersingularisogeny", "sidh", "kyber", "dilithium", "falcon", "ntru", "mceliece", "rainbow", "sphincs", "bliss", "newhope",  "lac", "roundx", "saber", "playprime", "classical", "crystals", "bike", "hqc", "sike", "picnic", "fullbetter", "frodokem", "ledacrypt", "dme", "rollo", "rqc", "threebears", "titanium",
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
	"dalton", "colligative", "osmosis", "diffusion", "effusion", "graham", "kinetic", "boltzman", "square", "theorymotion", "viscosity", "viscous", "newfluid", "nonfluid", "boltzmann", "redshift", "databricks", "hadoop", "yarn", "hive", "pig", "hbase", "zookeeper", "oozie", "sqoop", "flume", "mahout", "ambari", "spark", "storm", "kafka", "couchbase", "redis", "elasticsearch", "solr", "arangodb", "orientdb", "janusgraph", "titan", "dgraph", "timescaledb", "influxnow", "prometheus", "graphite", "grafana", "kibana", "tableau", "powerbi", "looker", "metabase", "superset", "mode", "periscope", "chartio", "datastudio", "qlik", "microstrategy", "python", "matlab", "excel", "airtable", "notion", "confluence", "asana", "monday", "smartsheet", "downup", "basecamp", "slack", "softteams", "zoom", "code-based", "multivariate", "supersingularisogeny", "sidh", "kyber", "dilithium", "falcon", "ntru", "mceliece", "rainbow", "sphincs", "bliss", "newhope",  "lac", "roundx", "saber", "playprime", "classical", "crystals", "bike", "hqc", "sike", "picnic", "fullbetter", "frodokem", "ledacrypt", "dme", "rollo", "rqc", "threebears", "titanium",
	"ringoffire", "hydrothermalvent", "pyroclasticflow", "continentaldrift", "platetectonics", "bronzeage", "golgiapparatus", "krebscycle", "aminoacid", "newhorizons", "halleffect", "longmarch", "dreamchaser", "naturalgas", "sanandreas", "rootmeansquare", "halflife",           
]; 

// --- HELPER MINIONS ---
// Small functions that do the actual hard work while the main function takes all the credit.

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
        result += chars.charAt(Math.floor(Math.random() * chars.length));
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
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // A bit of fancy array destructuring.
    }
    return array;
}

/**
 * Builds a string of words from the wordList to a target length.
 * @param {number} targetLength - The desired length of the final word block.
 * @returns {string} A vaguely coherent string of concatenated words.
 */
function makeWordBlock(targetLength) {
    if (targetLength <= 0) return '';
    let memorableBlock = '';
    // Keep adding words until we've hit the length quota. It's like verbal padding.
    while (memorableBlock.length < targetLength) {
        memorableBlock += wordList[Math.floor(Math.random() * wordList.length)];
    }
    // Trim the excess. We're not monsters.
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
 * Applies a very specific, almost superstitious, capitalization filter to a password.
 * It capitalizes one or two letters, either at the beginning or the end of the word block. Why? Tradition.
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
        // Flip a coin to decide: start or end? The fate of capitalization hangs in the balance.
        let placeUppercaseAtStart = Math.random() < 0.5;
        const charsToCapitalize = Math.min(indices.length, 2); // Max of two, let's not get crazy.

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
 * Calculates how many symbols a password should have based on its length.
 * This is not a science. It's a carefully curated set of magic numbers.
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


// --- THE GRAND MASTER FUNCTION ---
// The one function to rule them all. It delegates everything but takes the glory.

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols, memorable) {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%*()_+<>?';

    // If the user unchecks everything, they get a polite error instead of a blank password.
    const lettersActive = includeUppercase || includeLowercase;
    if (!lettersActive && !includeNumbers && !includeSymbols) {
        return 'Select an option.';
    }

    // Step 1: The Alchemist's Recipe
    // Figure out the ideal proportions of characters, as if this were a science.
    let sizes = {};
    let reallocationPool = 0;

    const idealSymbolSize = calculateSpecialCharCount(length);
    const idealNumberSize = Math.floor(length * 0.2);
    const idealLetterSize = length - idealSymbolSize - idealNumberSize;

    // Allocate space based on what's checked. If something is unchecked, its share goes into a "reallocation pool".
    sizes.symbols = includeSymbols ? idealSymbolSize : 0;
    if (!includeSymbols) reallocationPool += idealSymbolSize;

    sizes.numbers = includeNumbers ? idealNumberSize : 0;
    if (!includeNumbers) reallocationPool += idealNumberSize;

    sizes.letters = lettersActive ? idealLetterSize : 0;
    if (!lettersActive) reallocationPool += idealLetterSize;

    // Step 2: The Great Reallocation
    // Distribute the unused space from the pool to the active character types. Fairly. Mostly.
    if (reallocationPool > 0) {
        let activeToReceive = (lettersActive ? 1 : 0) + (includeNumbers ? 1 : 0) + (includeSymbols ? 1 : 0);
        if (activeToReceive > 0) {
            let portion = Math.floor(reallocationPool / activeToReceive);
            let remainder = reallocationPool % activeToReceive;

            if (lettersActive) sizes.letters += portion;
            if (includeNumbers) sizes.numbers += portion;
            if (includeSymbols) sizes.symbols += portion;

            // Give the leftovers to someone, anyone, to make sure the length is right.
            if (lettersActive) { sizes.letters += remainder; }
            else if (includeNumbers) { sizes.numbers += remainder; }
            else if (includeSymbols) { sizes.symbols += remainder; }
        }
    }

    // Step 3: Build the Blocks
    // Create the actual strings of characters based on our carefully calculated sizes.
    let charGroups = [];

    if (lettersActive && sizes.letters > 0) {
        let letterBlock;
        if (memorable) {
            letterBlock = makeWordBlock(sizes.letters);
            // Handle capitalization for memorable words with surgical imprecision.
            if (includeUppercase && !includeLowercase) {
                letterBlock = letterBlock.toUpperCase(); // All caps, for when you're shouting.
            } else if (includeUppercase) {
                letterBlock = applyUppercaseFilter(letterBlock); // Just a touch of class.
            }
        } else {
            // Standard, boring, random letters.
            if (includeUppercase && includeLowercase) {
                const upperSize = Math.ceil(sizes.letters / 2);
                const lowerSize = Math.floor(sizes.letters / 2);
                letterBlock = getRandomChars(upperCaseLetters, upperSize) + getRandomChars(lowerCaseLetters, lowerSize);
            } else if (includeUppercase) {
                letterBlock = getRandomChars(upperCaseLetters, sizes.letters);
            } else {
                letterBlock = getRandomChars(lowerCaseLetters, sizes.letters);
            }
        }
        charGroups.push(letterBlock);
    }

    if (includeNumbers && sizes.numbers > 0) {
        charGroups.push(getRandomChars(numbers, sizes.numbers));
    }
    if (includeSymbols && sizes.symbols > 0) {
        charGroups.push(getRandomChars(symbols, sizes.symbols));
    }

    // Step 4: Shake and Bake
    // Shuffle the character blocks so they don't get too comfortable, then join them.
    return shuffleArray(charGroups).join('');
}


// --- PAGE CONTROL FUNCTIONS ---
// These are the functions that the index.html file will call. They are the bridge between worlds.

function generateMultiplePasswords(count, ...args) {
    let passwords = [];
    for (let i = 0; i < (count || 1); i++) {
        passwords.push(generatePassword(...args));
    }
    return passwords.join('\n'); // Separate passwords with a newline, like civilized folk.
}

function syncValue(element1, element2) {
    element1.addEventListener('input', () => { element2.value = element1.value; });
    element2.addEventListener('input', () => { element1.value = element2.value; });
}

function pg_increment(inputId) {
    const input = document.getElementById(inputId);
    if (parseInt(input.value) < parseInt(input.max)) {
        input.value = parseInt(input.value) + 1;
        input.dispatchEvent(new Event('input')); // Pretend the user typed it. The browser will never know.
    }
}

function pg_decrement(inputId) {
    const input = document.getElementById(inputId);
    if (parseInt(input.value) > parseInt(input.min)) {
        input.value = parseInt(input.value) - 1;
        input.dispatchEvent(new Event('input')); // Shhh. It's our little secret.
    }
}

function generatePasswords() {
    // Read all the user's demands from the page.
    const length = parseInt(document.getElementById('lengthSlider').value);
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;
    const memorable = document.getElementById('memorableCheckbox').checked;
    const serialCount = parseInt(document.getElementById('serialCount').value);

    // Generate the masterpiece(s).
    const passwords = generateMultiplePasswords(serialCount, length, includeUppercase, includeLowercase, includeNumbers, includeSymbols, memorable);
    // Display it for all to see.
    document.getElementById('generatedPassword').textContent = passwords;
}

function copyPasswords() {
    const passwordText = document.getElementById('generatedPassword').textContent;
    if (passwordText) {
        navigator.clipboard.writeText(passwordText).then(() => {
                        alert("Passwords copied to clipboard! Remember: You don't choose the password. The password chooses the user. ✨");
        });
    }
}
